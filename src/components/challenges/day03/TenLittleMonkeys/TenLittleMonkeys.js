import React, {useState} from 'react';

const TenLittleMonkeys = () => {
    const [monkeys, setMonkeys ] = useState(10);

    const loseAMonkey = () => {
        if (monkeys > 0){
            setMonkeys(monkeys -1)
        }
    }

    return (
        <div>
            <h1>Ten Little Monkeys</h1>
            {
                monkeys > 0
                ? <p>{monkeys} little monkeys were jumping on the bed, one fell off and bumped his head! Momma called the doctor and the doctor said, "No more monkeys jumping on the bed!"</p>
                : <p>There are no more monkeys jumping on the bed.</p>
            }
            <button onClick={loseAMonkey}>Lose a monkey!</button>
        </div>
    );
}

  export default TenLittleMonkeys;