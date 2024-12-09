function Footer() {

    return(
        <div className="flex justify-between mt-24 mx-3">
            <div className="flex text-gray-500">
                <p>2024</p>
                <p>&#169;</p>
                <p className="ms-3 underline">Copyright by Ferdi</p>
            </div>
            <div className="flex gap-3">
            <button><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAwhJREFUSEvllknoT1EUxz9/YxmKIvOQDFFmNmQIO0RSLMxiYWeIEjIkCrFRFmZZWBgybSgZisyJSCxkSiky7Qznq/P0uu597/1sKLd+vfrde8/3nu/5nqGOv7Tq/hIu/zxwO6A7UL+Eoa/AE+B1GZNFHrcFtgDjgZZlhoL9d8AZYHnqESlggR0x4KZu8DNwB5BHRasRMAho7Ic+AdOAs+GlGHAT4Ckgj/fZdxdwqwJoZrsBMAJY599XQA/z/ksePAasC2vc4+k1UqzjMw1Udg8CF4DR/oi1ZcAvgA7u8ZsagQUqQK25Hp67wEugYxGw6JUiH5nHvROgetQkYBjwHbgKHPd7s4ADfm+eh+oj0AxoDbzNbIZUSxiK5xWPT4i90IxsBZoHGx+AxcBeYI5Tfd8y4obrpRvQF9B/P1cILFFc8lSYEBhf6qAC2QHcBhoC/RxUXglce/l1z0HFkNiJAo8Dzjl1U3K3B/rrRdVgj1neeGd/iJgQaw9ym4pxf2dQTBYCHzVapuYur7d0Wg0sAbYnYr8C2AysMiY25s6IGT18JHA5BTwWOB/x+BQg6vVTRYotMaQHh4+WZsSC0upiClibyr3TJrKJOesnXMlS88kagSWwIaadMW47SnUGLOMCyZYKigrLMlP0tgTwSqdY3025MzddF6NcuIXAocedPLdV9gZExNXFi4XKZa+gMVQS13DPYcUxTKdFVgR2mtcq/EoZeaKmIMUqjVTjF1iF2h0wIoX3MW0M9TtRj6U+qTBVQGRYVMcKiBS/JxIGNRwVED1QOR0FVj19bnX2GdA1EUuVzMmW72JHbfKaFZFjib5bz7uS2qTCpT4QBdaE8d5ra/sqk0TicdnfUrNUrfC0yLfWWFtUjOZbDz1sY8yMEsNl21lbVF9X0/i1YsCtgMc+7mhy2ABctx79rQzF97NBQPcUDo1BPfOdSedSo89si/H+HNCfjj4yoVZ5KHx00bCn2iqlqoJJJLUssaNaoAxQt/ttVZmr2xQMBanHPAQKp5cqwLV4Wvns/wf8A/yioB/UQ80fAAAAAElFTkSuQmCC"/></button>
              <button><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAn1JREFUSEvFll1oz1EYxz+LRsu83WxygaSIXLmQJuXCXNokFyhyRUSyxM3ukJfalEutlLU0K5m4cSNlYrUScuO1vCTZGmmLOF+dv87/OOd3zv/nYk/tYr//c57P85znOc/z1DFFUjdFXGoFTwPWAouBBdbpd8BrYAj4mRtILngZcBxoA+ZGjH8BrgGngBcpB1LgBuA0sB9QtDnyAzgHdAKTsQNF4EXATWBlDi2g8xDYAigV/0gMvAK4B8wvCa0cE3SdrYEqUyFwsy0URZySj8Bd4CXwHZgObAWWOwefWviYaywE7gO2p4jGuPT2AaOe7kFzUxe8bxeBA0VgefosA6ooVkeezyFT+V2eDRWZnuD7ync/4svArgywrnPA05Nh/bUDitqXMyYdx0LgeuATMDsDrJt57uj129wWHdXbXhoCbwTuZEClIufGra4cnsg899dh96p3Az2ZBhqBr1Z3luNE6rje9XUpueAOQHnIkbLgw0C3Dz4KnI1QXwFLcjwCrgLbIrpinPfBqmZVdUhqAT8GVkXs7AB6fbDG3f3IgaqKLIhcg+SbmVAzIjprgGEfrHan0aZi8UXd6U9urJx0Jo+q+oT9rtwfiUBlQ73/lw/W/znvUXpliusKsLPilN+5dBUaZykpA1ben8TA+n7LTKfNCXKtYN1kVaXHxqKGwLwCeC3gD4Dme9UUiy0CG8xSd9usPTMj8Fyw2qpa8SPfTtHq0wIMAnMC8BywBs4ms/6MhJxPLXsLbSfS+uJKCnzDrDt7zHj8HEtXClx5cuuBvabBtAJNkef01qbnEvAg9SxywL4N9ew3zvahbiVngtvk/0Sccr7U72UiLgXyD/0GGLB0H1VMfAgAAAAASUVORK5CYII="/></button>
              <button><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAfpJREFUSEvt1kuoT1EUx/HPjYEkz0J5RUlKDDDxyiOSMhDJQJEyUEhRBmJgQCkJkamJt4wkE4WBxESGTChJmUh5F2fVvv/uPd1z9/73v/lP7q7dGey1f9+91l57rdOjS6OnS1zD4P8W+aEI9ThcxjLMwA+cw2l8S55MSd9PvZ7VwaNxBXvwp8D9aXiK2QPYfsB1LMBYLO9rUwdvrQzv4B62F8DvY1PmgG+wMUXjcZPHB3AhLT7Hzmq+bRBeghcFUXlXRXEqtuBBE3gVWqfCT5zARXyvQQ7ifAH4c3Lg4WChHoWvGFkTjCS5i2vVyV/hI47jZAH4THXoo3W7gbJ6X8rSwTS/IObMAvAxnMqBd2NhlVyLsLZAtMQkNK/mwBvQ7y5KlDM28b6f5cBxt5HFs4YAGBJxHRPwNweO9ZXpHU8aAvhN7BhIp6lkRkU6jL0Y08EBVteeZ0uqCbwf27C4A/BLLG06dBN4Pl5jRAfersOjdsFhvxk3EI2j3XEWRwbblGuLkxFhX4MVhfQnWI9fnYCjnUWSHUqtLceOCO3KQUOkr8cTU8WKZj4vzahe8Q5zI95rlMZLOcPe9XqoI5Ojrs4tFPiNWykqrb+Lkr1NdxyeRoOPP4vpmIPx1X1Hi4v5PhWZ26k6lbD62eSSq23B0g3D4NJIdWzXtVD/A1e4TB/sCCruAAAAAElFTkSuQmCC"/></button>
            </div>
        </div>
    );
}

export default Footer;