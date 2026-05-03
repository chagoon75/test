// 버튼 클릭 이벤트
document.getElementById('action-btn').addEventListener('click', () => {
  alert('안녕하세요! 프로젝트가 정상적으로 동작합니다. 🎉');
});

// 폼 제출 이벤트
document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('모든 필드를 입력해주세요.');
    return;
  }

  console.log('폼 데이터:', { name, email, message });
  alert(`감사합니다, ${name}님! 메시지가 전송되었습니다.`);
  e.target.reset();
});
