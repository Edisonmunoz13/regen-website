import { randomBytes, createHmac } from "crypto";

const AUTH_SECRET = process.env.AUTH_SECRET || process.env.NEXT_PUBLIC_AUTH_SECRET;

if (!AUTH_SECRET) {
  console.warn("⚠️ AUTH_SECRET not set. Authentication tokens will not be secure!");
}

/**
 * Genera un token de autenticación seguro
 */
export function generateAuthToken(): string {
  if (!AUTH_SECRET) {
    throw new Error("AUTH_SECRET must be set in environment variables");
  }
  
  const randomToken = randomBytes(32).toString("hex");
  const timestamp = Date.now().toString();
  const data = `${randomToken}:${timestamp}`;
  
  // Crear HMAC usando el secreto
  const hmac = createHmac("sha256", AUTH_SECRET);
  hmac.update(data);
  const signature = hmac.digest("hex");
  
  // Token formato: randomToken:timestamp:signature
  return `${data}:${signature}`;
}

/**
 * Valida un token de autenticación
 */
export function validateAuthToken(token: string): boolean {
  if (!AUTH_SECRET) {
    console.error("AUTH_SECRET not set");
    return false;
  }
  
  try {
    const parts = token.split(":");
    if (parts.length !== 3) {
      return false;
    }
    
    const [randomToken, timestamp, signature] = parts;
    
    // Verificar que el timestamp no sea muy antiguo (máximo 7 días)
    const tokenAge = Date.now() - parseInt(timestamp, 10);
    const maxAge = 7 * 24 * 60 * 60 * 1000; // 7 días
    if (tokenAge > maxAge || tokenAge < 0) {
      return false;
    }
    
    // Verificar la firma
    const data = `${randomToken}:${timestamp}`;
    const hmac = createHmac("sha256", AUTH_SECRET);
    hmac.update(data);
    const expectedSignature = hmac.digest("hex");
    
    // Comparación segura para prevenir timing attacks
    return timingSafeEqual(signature, expectedSignature);
  } catch (error) {
    console.error("Error validating auth token:", error);
    return false;
  }
}

/**
 * Comparación segura de strings para prevenir timing attacks
 */
function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) {
    return false;
  }
  
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  
  return result === 0;
}
