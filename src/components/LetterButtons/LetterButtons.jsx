const ALPHABETS = new Array(26).fill('').map((e, index) => String.fromCharCode(65 + index));

const LetterButtons = ({ usedLetters, onLetterClick }) => {

    // Convert usedLetters to a Set of uppercase letters
    const selectedLetters = new Set(usedLetters.join('').toUpperCase().split(''));

    // Function to determine the text color based on the letter's usage
    const buttonStyle = (letter) => {
        if (selectedLetters.has(letter)) {
            return 'text-red-700'; // Red text for used letters
        } else {
            return 'text-blue-700'; // Blue text for unused letters
        }
    };

    const handleClick = function(event){
        const character = event.target.value
        onLetterClick(character)

    }

    // Map over ALPHABETS to create buttons with the appropriate style
    const buttons = ALPHABETS.map((letter) => {
        return (
            <button
                key={`button-${letter}`}
                value={letter}
                disabled={selectedLetters.has(letter)}
                onClick={handleClick}
                className={`text-xl h-5 w-5 m-1 focus:outline-none ${buttonStyle(letter)}`}
            >
                {letter}
            </button>
        );
    });

    return (
        <>
            {buttons}
        </>
    );
};

export default LetterButtons;
