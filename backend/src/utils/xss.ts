const HTML_DELIMITER_PATTERN = /[<>]/;

/**
 * User-provided values handled by these schemas are plain text, not HTML.
 * Rejecting markup avoids storing active content while preserving the original
 * value (important for passwords and other opaque credentials).
 */
export const isPlainText = (value: string): boolean => !HTML_DELIMITER_PATTERN.test(value);

export const PLAIN_TEXT_MESSAGE = "HTML is not allowed.";