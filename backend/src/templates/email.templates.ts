export const generatePasswordResetEmail = (user: any, resetUrl: string) => {
    return `
    <div style="font-family: Arial, sans-serif; max-width:600px; margin:auto;">

        <h2>Password Reset Request</h2>

        <p>Hello ${user.fullName},</p>

        <p>
            We received a request to reset your password.
            Click the button below to reset your password.
        </p>

        <a 
            href="${resetUrl}"
            style="
                display:inline-block;
                padding:10px 20px;
                background:#2563eb;
                color:white;
                text-decoration:none;
                border-radius:5px;
            "
        >
            Reset Password
        </a>

        <p>
            This link will expire in <strong>5 minutes</strong>.
        </p>

        <p>
            If you did not request a password reset, ignore this email.
        </p>

        <p>
            Thanks,<br>
            Phoenix Team
        </p>

    </div>
    `;
};

export const generatePasswordUpdatedEmail = (user: any) => {
    return `
    <div style="font-family: Arial, sans-serif; max-width:600px; margin:auto;">

        <h2>Password Updated Successfully</h2>

        <p>Hello ${user.fullName},</p>

        <p>
            Your password has been updated successfully.
        </p>

        <p>
            If you made this change, you can safely ignore this email.
        </p>

        <p>
            If you did not update your password, please contact support
            immediately or reset your password.
        </p>

        <p>
            Thanks,<br>
            Phoenix Team
        </p>

    </div>
    `;
};