export default function Card({ name, age }) {
    if (!(name && age)) return;
    return (
        <>
            <p>
                My name is {name} and I am {age} years old.
            </p>
        </>
    );
}
