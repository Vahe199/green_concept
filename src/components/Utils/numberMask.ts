import React from 'react';

export const formatPhoneNumber = (phoneNumberString: any) => {
    let cleaned = ('' + phoneNumberString).replace(/\D/g, '')
    let match = cleaned.match(/^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/)
    if (match) {
        return '+' + match[1] + '-' + match[2] + '-' + match[3] + '-' + match[4] + '-' + match[5]
    }
    return null
}


