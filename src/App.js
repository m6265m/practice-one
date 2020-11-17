import React, {useState} from 'react';
import './App.css';
import Counter from './Counter'
import Total from "./Total";


function App() {

    const [data, setData] = useState([
        {id: 1, value: 0},
        {id: 2, value: 0},
        {id: 3, value: 0},
        {id: 4, value: 0}
    ]);

    // const handleDecrement = (amount) => {
    //     // setData([...data[e.target.id], value: prev => prev - amount ])
    //     // setData([...data, { value: prev => prev + amount}])
    //
    //     // const updatedValues = data.map(item => { return { ...item, value: prev => prev - amount } })
    //     // setData(updatedValues)
    //
    //     data.map((user, index) => (
    //         setData([...data].map(object => {
    //             if (object.id - 1 === index) {
    //                 return {
    //                     ...object,
    //                     value: prev => prev - amount,
    //                 }
    //             } else return object;
    //         }))
    //     ))
    //
    //     // data.map(user =>
    //     //    (
    //     //
    //     //         setData([...data].map((object,valueIndex) => {
    //     //           if(object.id === user.id) {
    //     //             return {
    //     //               ...object,
    //     //               value: amount,
    //     //             }
    //     //           }
    //     //           else return object;
    //     //         }))
    //     //
    //     //   )
    //     //
    //     // )
    //
    // }
    //
    // const handleIncrement = (amount) => {
    //     // setData([...data, {...data, value: prevState => prevState + amount}])
    //
    // }
    return (
        <div className="App">
            {data.map(counter => (
                <Counter
                    key={counter.id}
                    value={counter.value}
                    onIncrement={(amount) => {
                        setData([...data].map(object => {
                            if (object.id === counter.id) {
                                return {
                                    ...object,
                                    value: object.value + amount
                                }
                            } else return object;
                        }))
                    }}
                    onDecrement={(amount) => {
                      setData([...data].map(object => {
                        if (object.id === counter.id) {
                          return {
                            ...object,
                            value: object.value - amount
                          }
                        } else return object;
                      }))
                    }}
                />
            ))}

            {/*<Total total={data.map(counter => {*/}
            {/*    return(*/}
            {/*        counter.value*/}
            {/*    )*/}
            {/*})}/>*/}

            <Total total={data.reduce(function(prev, current) {
                return prev + +current.value
            }, 0)}/>

        </div>
    );
}

export default App;
