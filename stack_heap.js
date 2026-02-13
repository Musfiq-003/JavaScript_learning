// stack (primitive data types)

 let Student1 = "Riaj"

 let Student2 = Student1
 Student2 = "Lisan"


 console.log(Student1)
 console.log(Student2)


// heap (non-primitive data types)
    let studentOne = {
        name: "Riaj",
        age: 22,
        city: "Dhaka"
    }
    let studentTwo = studentOne
    studentTwo.city = "Chittagong"
    
    console.log("\n" + studentOne.city)
    console.log(studentTwo.city)