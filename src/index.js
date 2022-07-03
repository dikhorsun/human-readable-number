module.exports = function toReadable (number) {
    const numberSmall = ['zero','one','two','three','four', 'five','six','seven','eight','nine', 
    'ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen'];
    const dozens = ['', 'ten', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
    if(number > 999) {
        return 'too big'
    };
    if(number < 20){
        return numberSmall[number]
    };
    if(number <= 99){
        if(number % 10 === 0) {
            return dozens[number / 10]
        } else {
            return (dozens[Math.floor(number / 10)] + ' ' + numberSmall[number % 10])
        }
    };
    if(number > 99){
        if(number % 100 === 0){
            return numberSmall[number / 100] + ' ' + 'hundred'
        }
        if(number % 10 === 0){
            return numberSmall[Math.floor(number / 100)] + ' ' + 'hundred' + ' ' + dozens[(number % 100) / 10]
        }
        if((number % 100) < 20) {
            return numberSmall[Math.floor(number / 100)] + ' ' + 'hundred' + ' ' + numberSmall[(number % 100)]
        } else{
            return numberSmall[Math.floor(number / 100)] + ' ' + 'hundred' + ' ' + dozens[Math.floor((number % 100) / 10)] + ' ' + numberSmall[(number % 100) % 10]
        }
    };
}
