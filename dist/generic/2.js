/*
  У вас є тип AllType. Існує функція compare, яка приймає два об'єкти. Ці об'єкти містять поля AllType.
  Ваше завдання – використовувати Pick та generics для вказівки, що поля цих об'єктів належать AllType.
  Функція compare повинна повертати AllType.
*/
// Решение с Pick согласно условию
function compare(top, bottom) {
    return {
        ...top,
        ...bottom
    };
}
const top = {
    name: "top",
    color: "topColor",
};
const bottom = {
    position: -1,
    weight: 666,
};
const obj = compare(top, bottom);
console.log(obj);
export {};
// Решение с Partial #1 
// function compare(top:Partial<AllType>, bottom:Partial<AllType>): AllType {
//   return {
//     ...({} as AllType),
//     ...top,
//     ...bottom };
// }    
// Решение с Partial #2
// function compare(top:Partial<AllType>, bottom:Partial<AllType>): AllType {
//   const defaultTypes = {
//    name: " ",
//    position: 0,
//    color: "",
//    weight: 0,
//   }
//  return {
//    ...defaultTypes,
//    ...top,
//    ...bottom };
// } 
// function compare<T extends keyof AllType,K extends keyof AllType>(    
//   top:Pick<AllType,T>,
//   bottom:Pick<AllType,K>): AllType {
//  return {
//      ...({} as AllType),
//     ...top,
//     ...bottom };
// }
//# sourceMappingURL=2.js.map