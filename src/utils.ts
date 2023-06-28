type Strength = 'weak' | 'medium' | 'strong'

/* Don't actually use this to generate passwords */
export function generatePassword(length: number) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}

export function calculateStrength(length: number) {
    let strength: Strength = 'weak'

    if (length > 20) {
        strength = 'medium'
    }
    if (length >= 30) {
        strength = 'strong'
    }

    return strength;
}