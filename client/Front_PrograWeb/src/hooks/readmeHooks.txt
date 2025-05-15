Esto es muy importante:

Si han prestado atencion a clase, ya saben que
useState, useEffect, useEffectLayout, useMemo, useContext son denominados HOOKS

---> Un hook o gancho es basicamente una funcion que te permite usar las caracteristicas reactivas de React

Por ej, en lugar de usar un let numero = 5, si quieres q se pueda actualizar a nivel de componentes harias
const [numero, setNumero] = useState(5)

Si haces let, la variable no se actualiza a tiempo y el virtualDOM lo rechaza.

-----------------------------------------------------------------------------------------------------------------

En base a esto, luego tendremos procesos q realicemos al renderizar frecuentemente,
 como algo que queramos que se haga siempre al renderizar una pagina o dar click a algo

Ahi entran los custom hooks.

Por ejemplo, si quiero q cada vez que entremos a una pagina, se lance confetti,
 hare un useEffect sin dependencias y le agregare la funcion del confetti.

 Luego, encapsulo todo en una funcion y lo guardo en un archivo useConfetti.js y se exporta.

 