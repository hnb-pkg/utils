console.log("Hello")

export async function mapAsync<K, T = any>(list: T[], func: (list: T, index: number) => K | Promise<K>, thisArg?: any) {
    return await Promise.all(list.map(func, thisArg));
}

export async function flatMapAsync<T, K>(
    list: T[],
    func: (list: T, index: number) => K[] | Promise<K[]>,
    thisArg?: any,
) {
    return (await Promise.all(list.map(func, thisArg))).flat();
}
