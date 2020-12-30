const hours = document.querySelector('#hour');
        const minutes = document.querySelector('#minute');
        const seconds = document.querySelector('#second');
        function clock(){
            let h = new Date().getHours();
            let m = new Date().getMinutes();
            let s = new Date().getSeconds();
            hours.textContent = h;
            minutes.textContent = m;
            seconds.textContent = s;
        }
        // clock();
        let interval = setInterval(clock, 1000);
        // alert();
        function myFunction() {
            alert("Mind Your Own Bussiness");
          }
