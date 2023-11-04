import { useState, useEffect } from 'react';
import cross from '../asset/svg/cross.svg';
const SnakeGame = ({ setIsSnakeVisible }) => {
  const gridSize = 20;
  const cellSize = 30;
  const initialSnake = [
    { x: 5, y: 5 },
    { x: 4, y: 5 },
    { x: 3, y: 5 },
  ];
  const initialFood = { x: 10, y: 10 };

  const [snake, setSnake] = useState(initialSnake);
  const [food, setFood] = useState(initialFood);
  const [direction, setDirection] = useState('right');
  const [gameState, setGameState] = useState('idle');
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (gameState === 'running') {
      const handleGameTick = () => {
        moveSnake();
        checkCollision();
      };

      const interval = setInterval(handleGameTick, 200);

      return () => {
        clearInterval(interval);
      };
    }
  }, [gameState, snake, food, direction, score]);

  const moveSnake = () => {
    const newSnake = [...snake];
    let head = { ...newSnake[0] };

    switch (direction) {
      case 'up':
        head.y -= 1;
        break;
      case 'down':
        head.y += 1;
        break;
      case 'left':
        head.x -= 1;
        break;
      case 'right':
        head.x += 1;
        break;
      default:
        break;
    }

    newSnake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
      setFood(generateRandomFoodPosition());
      setScore(score + 1);
    } else {
      newSnake.pop();
    }

    setSnake(newSnake);
  };

  const checkCollision = () => {
    const head = snake[0];

    if (
      head.x < 0 ||
      head.x >= gridSize ||
      head.y < 0 ||
      head.y >= gridSize ||
      snake
        .slice(1)
        .some((segment) => segment.x === head.x && segment.y === head.y)
    ) {
      alert('Game Over! Your Score: ' + score);
      resetGame();
    }
  };

  const generateRandomFoodPosition = () => {
    let newFood;
    do {
      newFood = {
        x: Math.floor(Math.random() * gridSize),
        y: Math.floor(Math.random() * gridSize),
      };
    } while (
      snake.some(
        (segment) => segment.x === newFood.x && segment.y === newFood.y
      )
    );
    return newFood;
  };

  const resetGame = () => {
    setSnake(initialSnake);
    setFood(initialFood);
    setDirection('right');
    setGameState('idle');
    setScore(0);
  };

  const startGame = () => {
    resetGame();
    setGameState('running');
  };

  const stopGame = () => {
    setGameState('idle');
  };

  const handleKeyDown = (e) => {
    switch (e.key) {
      case 'ArrowUp':
        if (direction !== 'down') setDirection('up');
        break;
      case 'ArrowDown':
        if (direction !== 'up') setDirection('down');
        break;
      case 'ArrowLeft':
        if (direction !== 'right') setDirection('left');
        break;
      case 'ArrowRight':
        if (direction !== 'left') setDirection('right');
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (gameState === 'running') {
      window.addEventListener('keydown', handleKeyDown);

      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [gameState, direction]);

  const drawCell = (x, y, type) => {
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    ctx.fillStyle =
      type === 'snake' ? 'green' : type === 'food' ? 'red' : 'black';
    ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
  };

  useEffect(() => {
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    snake.forEach((segment) => drawCell(segment.x, segment.y, 'snake'));
    drawCell(food.x, food.y, 'food');
  }, [snake, food]);

  return (
    //

    <div className="bg-gray-800 absolute   z-50  p-4 rounded-lg">
      <div className="" onClick={() => setIsSnakeVisible(false)}>
        <img className="mt-1 h-8 m-1 bg-white" src={cross} alt="cross" />
      </div>
      <canvas
        className="rounded-lg mx-auto"
        width={gridSize * cellSize}
        height={gridSize * cellSize}
        style={{ border: '2px solid white' }}
      />
      <p>Score: {score}</p>
      {gameState === 'idle' ? (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={startGame}
        >
          Start Game
        </button>
      ) : (
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={stopGame}
        >
          Stop Game
        </button>
      )}
    </div>
  );
};

export default SnakeGame;
