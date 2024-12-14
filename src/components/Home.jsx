
function Home() {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="h-[90%] w-[80%] flex justify-center flex-col items-center backdrop-blur-sm rounded-lg shadow-lg p-6">
        {/* Welcome - Green Glow */}
        <span
          style={{
            color: '#fff',
            textShadow: `
              0 0 7px #fff,
              0 0 10px #fff,
              0 0 21px #fff,
              0 0 42px #0fa,
              0 0 82px #0fa,
              0 0 92px #0fa,
              0 0 102px #0fa,
              0 0 151px #0fa
            `,
            animation: 'flicker 2s infinite',
          }}
          className="text-7xl font-title p-4"
        >
          Welcome
        </span>

        {/* My name is - Green Glow */}
        <span
          style={{
            color: '#fff',
            textShadow: `
              0 0 7px #fff,
              0 0 10px #fff,
              0 0 21px #fff,
              0 0 42px #0fa,
              0 0 82px #0fa,
              0 0 92px #0fa,
              0 0 102px #0fa,
              0 0 151px #0fa
            `,
            animation: 'flicker 3s infinite',
          }}
          className="text-7xl font-title"
        >
          I am
        </span>

        {/* Minase - Pink Glow */}
        <span
          style={{
            color: '#fff',
            textShadow: `
              0 0 4px #fff,
              0 0 11px #fff,
              0 0 19px #fff,
              0 0 40px #ff0099,
              0 0 80px #ff0099,
              0 0 90px #ff0099,
              0 0 100px #ff0099,
              0 0 150px #ff0099
            `,
            
          }}
          className="text-8xl font-title"
        >
          Minase
        </span>
      </div>

      {/* Keyframes */}
      <style>
        {`
          @keyframes flicker {
            0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
              opacity: 1;
            }
            20%, 24%, 55% {
              opacity: 0.8;
            }
            22%, 53% {
              opacity: 0.4;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Home;
