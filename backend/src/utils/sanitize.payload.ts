const SENSITIVE_FIELDS = new Set([
    "password",
    "confirmPassword",
    "currentPassword",
    "newPassword",
    "auth_token",
    "accessToken",
    "refreshToken",
    "tempJWT",
    "authCode",
    "twoFactorSecret"
]);

export const sanitizePayload = (value: unknown): unknown => {
    if (Array.isArray(value)) {
        return value.map(sanitizePayload);
    };

    if (value && typeof value === "object") {
        const sanitized: Record<string, unknown> = {};

        for (const [key, val] of Object.entries(value as Record<string, unknown>)) {
            sanitized[key] = SENSITIVE_FIELDS.has(key) ? "[REDACTED]" : sanitizePayload(val);
        };

        return sanitized;
    };

    return value;
};