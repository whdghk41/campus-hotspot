<script>
        const panels = document.querySelectorAll(".place-panel");
        const buttons = document.querySelectorAll("[data-place]");
        const sourceBox = document.getElementById("source-box");

        // 장소별 출처 정보 데이터 (원하시는 네이버 지도 링크나 출처 텍스트로 각각 변경 가능합니다!)
        const sources = {
            "dasol": '사진 출처: <a href="https://naver.me/5bVjQ4lj" target="_blank" class="source-link">네이버 지도 target="_blank" class="source-link">네이버 지도 (다솔관)</a>',
            "mammoth": '사진 출처: <a href="https://naver.me/F2Z99wOu" target="_blank" class="source-link">네이버 지도 (매머드커피)</a>',
            "nichols": '사진 출처: <a href="https://naver.me/xVGFQF3f" target="_blank" class="source-link">네이버 지도 (니콜스관)</a>'
        };

        function showPlace(id) {
            // 1. 패널 보이기/숨기기 처리
            for (const panel of panels) {
                if (panel.id === id) {
                    panel.style.display = "block";
                } else {
                    panel.style.display = "none";
                }
            }

            // 2. 바디(body)의 테마 클래스 변경 (배경색 변경 연동)
            document.body.className = "page-" + id;

            // 3. 하단 사진 출처 변경
            if (sources[id]) {
                sourceBox.innerHTML = sources[id];
            }
        }

        for (const button of buttons) {
            button.addEventListener("click", function () {
                showPlace(button.dataset.place);
            });
        }
    </script>