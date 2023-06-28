import { createEffect, createSignal } from "solid-js";
import { calculateStrength, generatePassword } from "./utils";

export default function PasswordGenerator() {
    const [length, setLength] = createSignal(30);
    let passwordRef: HTMLInputElement;

    const password = () => generatePassword(length());
    const strength = () => {
        return calculateStrength(length());
    };

    createEffect((prevPassword) => {
        if (prevPassword !== password()) {
            passwordRef.select();
        }

    }, password);

    const copyPassword = () => {
        window.navigator.clipboard.writeText(password());
    }

    return (
        <div style={{ "text-align": 'left' }}>
            <h1>Password Generator</h1>
            <div style={{ display: 'flex', gap: '16' }}>
                <label for="password" style={{ flex: 1 }}>
                    <input
                        type="text"
                        id="password"
                        name="password"
                        ref={passwordRef}
                        value={password()}
                        style={{ height: '32px', width: '100%', "font-size": '1.4rem', padding: '4' }}
                    />
                    <p style={{ "margin-top": '4', "text-align": 'left' }}><small class="strength">{strength()}</small></p>
                </label>
                <div>
                    <button onClick={copyPassword}>Copy Password</button>
                </div>
            </div>

            <h3>Options</h3>

            <div style={{ display: 'flex', "flex-direction": 'column', gap: '8' }}>
                <label for="length">
                    Length ({length()})
                    <input
                        type="range"
                        step="4"
                        min="10"
                        max="36"
                        id="length"
                        name="length"
                        value={length()}
                        onChange={(e) => {
                            setLength(+e.target.value);
                        }}
                    />
                </label>
            </div>
        </div>
    )
}