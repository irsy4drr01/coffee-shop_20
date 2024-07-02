import starIcon from '../assets/icons/product/star.svg';
import starPartialIcon from '../assets/icons/product/starPartial.svg';
import starWhiteIcon from '../assets/icons/product/starWhite.svg';

interface StarsProps {
    rating: number;    
    imgClassName: string;
    ratingClassName: string;
}

function StarsRating({ rating, imgClassName = '', ratingClassName = '' }: StarsProps): JSX.Element {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;
    const starIcons: JSX.Element[] = [];

    // Mengisi bintang penuh
    for (let i = 0; i < fullStars; i++) {
        starIcons.push(<img key={i} className={imgClassName} src={starIcon} alt="star" />);
    }

    // Menambahkan bintang setengah jika ada
    if (hasHalfStar) {
        starIcons.push(<img key="half" className={imgClassName} src={starPartialIcon} alt="half star" />);
    }

    // Mengisi bintang kosong hingga jumlah total menjadi lima
    const remainingStars = 5 - starIcons.length;
    for (let i = 0; i < remainingStars; i++) {
        starIcons.push(<img key={`empty-${i}`} className={imgClassName} src={starWhiteIcon} alt="empty star" />);
    }

    // Format rating dengan satu angka di belakang koma
    const toFixedRating = rating.toFixed(1)

    return (
        <>
        {starIcons}
        <p className={ratingClassName}>{toFixedRating}</p>
        </>
    );
}

export default StarsRating;
