
export function calcularMedia(arr=[]) {
    let soma = 0;
    for (let i = 0; i < arr.length; i++){
        soma += arr[i]
    };
    const media = soma / arr.length;

    return media;
}