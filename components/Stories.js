import faker from 'faker';
import { useEffect } from 'react';

function Stories() {
    useEffect(() => {
        const suggestions=[...Array(20)].map((_, i) =>({
            ...faker.helpers.contextualCard(),
            id: i,
        }));

        console.log(suggestions);

    }, []);
    // useEffect(() => {
    //     effect
    //     return () => {
    //         cleanup
    //     }
    // }, [input])

    return (
        <div>
            {/*story */}
        </div>
    )
}

export default Stories