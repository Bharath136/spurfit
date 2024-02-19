export const LoginValidation = (credentials) => {
    const errors = {};

    if (!credentials.email_address) {
        errors.email_address = 'Email is required';
    }

    if (!credentials.password) {
        errors.password = 'Password is required';
    }

    return errors;
};


export const RegisterValidation = (formData) => {
    const errors = {};

    if (!formData.first_name) {
        errors.first_name = 'First Name is required';
    }

    if (!formData.last_name) {
        errors.last_name = 'Last Name is required';
    }

    if (!formData.email_address) {
        errors.email_address = 'Email is required';
    }

    if (!formData.contact_number) {
        errors.contact_number = 'Contact Number is required';
    }

    if (!formData.password) {
        errors.password = 'Password is required';
    }

    return errors;
};

export const ResetPasswordValidation = (formData) => {
    const errors = {};

    if (!formData.email_address) {
        errors.email_address = 'Email is required';
    }

    if (!formData.password) {
        errors.password = 'New Password is required';
    }

    if (!formData.confirm_password) {
        errors.confirm_password = 'Confirm Password is required';
    }

    return errors;
};


export const UploadFormValidation = (formData) => {
    const errors = {};

    if (!formData.financial_year) {
        errors.financial_year = 'Financial Year is required';
    }

    if (!formData.document_name) {
        errors.document_name = 'Document Name is required';
    }

    if (!formData.document_type) {
        errors.document_type = 'Document Type is required';
    }
    return errors;
};


export const OtpValidation = (formData) => {
    const errors = {};

    if (!formData.otp) {
        errors.otp = 'OTP is required';
    }
    return errors;
};