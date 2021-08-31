const header = document.createElement('header');
const headerDiv = document.createElement('div');
// const headerH1 = document.createElement('h1');

$(headerDiv).addClass('container');
// $(headerH1).text('Logo');


$('body').append(
    $(header).append(
        $(headerDiv).append(nav))
);

$('body').append(header);
/*

<header>
    <div class="container">
        <h1>Logo</h1>
    </div>
</header>

*/