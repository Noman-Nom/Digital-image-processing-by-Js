
const getInputData = (inputData)=>{

    const inputValues = document.getElementById(inputData)
    const values = []
    // console.log("input Data = " , inputValues)
    // console.log("input Data = " , inputValues.rows.length)
   

    for (let i = 0; i < inputValues.rows.length; i++) {
        const input = inputValues.rows[i].cells[0].querySelector('input');
    
        values[i] = parseFloat(input.value)
      
    }
    
    console.log( "input values = ",values)

    return values
    }



const calculate = ()=>{

   const inputData =  getInputData('inputData')
//    console.log("input Data =",  inputData)

      const normalizeData = inputData.map((value)=>{
            const normalizeValue = value/4096

            console.log("Normaloze Value = ", normalizeValue)

            return normalizeValue

        })

        // console.log("data= ", normalizeData)
    //    const sortData = normalizeData.slice().sort((a,b)=>{
    //     //    console.log(`${a} - ${b} = ${a-b}` )
    //         const data = a-b
    //         // console.log( "data = ", data)
    //         return data
    //    })

        // console.log( "sortData = ", sortData)

        const cdf = normalizeData.reduce((accumulator , value , index)=>{

            accumulator.push(index > 0 ? accumulator[index - 1] + value : value )
            return accumulator 

        },[])

        console.log("CDF = ", cdf)

     const EquilizedHistogram = cdf.map((value)=>{
            const result = Math.round(value*7) 
            return result

     })

     console.log("Equilized Histogram = " , EquilizedHistogram)

    }
