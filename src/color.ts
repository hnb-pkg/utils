export function createRgbPrefix(hexRgb: string) {
    const cleanHex = hexRgb.replace(/^#/, "");
    let list: string[];
    if (cleanHex.length === 3) list = cleanHex.split("").map((char) => char + char);
    else list = cleanHex.match(/.{2}/g) ?? [];
    const rgb = list.map((x: string) => parseInt(x, 16)).join(",");
    return (msg: any) => `\x1b[38;2;${rgb}m${msg}\x1b[0m`;
}

export const colored = {
    black: (msg: any) => `\x1b[30m${msg}\x1b[0m`,
    red: (msg: any) => `\x1b[31m${msg}\x1b[0m`,
    green: (msg: any) => `\x1b[32m${msg}\x1b[0m`,
    yellow: (msg: any) => `\x1b[33m${msg}\x1b[0m`,
    blue: (msg: any) => `\x1b[34m${msg}\x1b[0m`,
    magenta: (msg: any) => `\x1b[35m${msg}\x1b[0m`,
    cyan: (msg: any) => `\x1b[36m${msg}\x1b[0m`,
    white: (msg: any) => `\x1b[37m${msg}\x1b[0m`,
    gray: (msg: any) => `\x1b[90m${msg}\x1b[0m`,
    reset: (msg: any) => `\x1b[0m${msg}\x1b[0m`,
};

export const _c = {
    r: colored.red,
    g: colored.green,
    y: colored.yellow,
    b: colored.blue,
    m: colored.magenta,
    c: colored.cyan,
    w: colored.white,
    e: colored.reset,
    gray: colored.gray,
    black: colored.black,
};
