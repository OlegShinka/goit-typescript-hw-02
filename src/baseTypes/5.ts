/* 
  Як ви визначите змінну в TypeScript, яка може приймати рядок або число (union type)? 
  І так само визначте змінну, яка може приймати тільки одне з двох рядкових значень: 'enable' або 'disable' (literal type)?
*/

// union type
let item: "string" | number;

// literal type
type Union = "enable" | "disable";
let item2: Union = "disable";
item2 = "enable";
