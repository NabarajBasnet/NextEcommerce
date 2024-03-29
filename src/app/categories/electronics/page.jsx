'use client'



const Electronics = ()=>
{

    // Spread operator used in an object
    /**
     * When spread oeprator used in an object it create a copy of 
     * all properties in the object and create new object
     * 
     * When used with an object, the spread operator creates a new object 
     * containing all the properties from the origin array where the spread oeprator was applied 
    */
    // Example
    // const originalObj = {name: 'Nabaraj', age: 20}
    // console.log(originalObj);
    // const newObj = {...originalObj};
    // console.log('new Obj',newObj)


    /**
     * When spread operator is used with an array, the spread operator creates a new array containing
     * a copy of all elements from the original array.
     */
    // const originalArr = [10,20,30];
    // console.log(originalArr);
    // const newArr = [...originalArr];
    // console.log('New array: ', newArr);

    return(
        <>
        <div>
            <h1>Electronics page</h1>
        </div>
        </>
    )
}


export default Electronics;