import React from 'react';

interface QuestionProps {
    question: string;
    options: string[];
    onAnswer: (answer: string) => void;
}

const Question: React.FC<QuestionProps> = ({ question, options, onAnswer }: QuestionProps) => {
    return (
        <div className="question-container">
            <h2>{question}</h2>
            <div className="options">
                {options.map((option, index) => (
                    <button key={index} onClick={() => onAnswer(option)}>
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Question;