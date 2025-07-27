import React, { useState, useEffect } from 'react';
import Question from './Question';


const questions = [
    {
        question: 'What is the first letter of the Tamil alphabet?',
        options: ['அ', 'ஆ', 'இ', 'ஈ'],
        answer: 'அ',
    },
    {
        question: 'What is the second letter of the Tamil alphabet?',
        options: ['உ', 'எ', 'ஏ', 'ஒ'],
        answer: 'ஆ',
    },
    // Add more questions as needed
];

const Quiz: React.FC = (): React.JSX.Element => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [quizCompleted, setQuizCompleted] = useState(false);

    const [useStyleA, setUseStyleA] = useState(false);

    useEffect(() => {
        if (useStyleA) {
            import('./stylesA.scss');
        } else {
            import('./stylesB.scss');
        }
    }, [useStyleA]);

    const handleAnswer = (selectedOption: string) => {
        if (selectedOption === questions[currentQuestionIndex].answer) {
            setScore(score + 1);
        }
        const nextQuestion = currentQuestionIndex + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestionIndex(nextQuestion);
        } else {
            setQuizCompleted(true);
        }
    };

    const restartQuiz = () => {
        setCurrentQuestionIndex(0);
        setScore(0);
        setQuizCompleted(false);
    };

    return (
        <div className="quiz-container">
            {quizCompleted ? (
                <div className="quiz-result">
                    <h2>Your Score: {score} out of {questions.length}</h2>
                    <button onClick={restartQuiz}>Restart Quiz</button>
                </div>
            ) : (
                <Question
                    question={questions[currentQuestionIndex].question}
                    options={questions[currentQuestionIndex].options}
                    onAnswer={handleAnswer}
                />
            )}
        </div>
    );
};

export default Quiz;