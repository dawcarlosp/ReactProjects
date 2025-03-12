function HeaderComponent(){
    return (
        <header class="flex flex-col items-center justify-center">
            <h1>CreatiFlow!</h1>
            <nav class="w-full">
                <ul class="flex justify-around">
                    <li><a href="">Home</a></li>
                    <li><a href="">Sobre mi</a></li>
                    <li><a href="">Sera mejor angular?</a></li>
                    <li><a href="">O react?</a></li>
                </ul>
            </nav>
        </header>
    )
}
export default HeaderComponent;