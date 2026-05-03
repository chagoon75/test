// js/lotto.js

document.addEventListener('DOMContentLoaded', () => {
  const generateBtn = document.getElementById('generate-btn');
  const ballsContainer = document.getElementById('balls-container');

  generateBtn.addEventListener('click', generateLottoNumbers);

  function generateLottoNumbers() {
    // 버튼 애니메이션 제거
    generateBtn.classList.remove('pulse');
    generateBtn.disabled = true;

    // 기존 번호 초기화
    ballsContainer.innerHTML = '';

    // 1~45 숫자 생성 및 섞기
    const numbers = [];
    while (numbers.length < 6) {
      const num = Math.floor(Math.random() * 45) + 1;
      if (!numbers.includes(num)) {
        numbers.push(num);
      }
    }

    // 오름차순 정렬
    numbers.sort((a, b) => a - b);

    // 공 생성 및 애니메이션 렌더링
    numbers.forEach((num, index) => {
      setTimeout(() => {
        const ball = document.createElement('div');
        ball.classList.add('lotto-ball');
        ball.textContent = num;
        ball.setAttribute('data-color', getColorByNumber(num));
        
        ballsContainer.appendChild(ball);

        // 마지막 공이 렌더링된 후 버튼 활성화
        if (index === 5) {
          setTimeout(() => {
            generateBtn.disabled = false;
          }, 500);
        }
      }, index * 150); // 150ms 간격으로 공이 나타남
    });
  }

  function getColorByNumber(num) {
    if (num <= 10) return 'yellow';
    if (num <= 20) return 'blue';
    if (num <= 30) return 'red';
    if (num <= 40) return 'gray';
    return 'green';
  }
});
