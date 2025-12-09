import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const DestinationCard = ({img,title,content , path}) => {
    return (
        <div className="new-top-desti-thumb">
        <Image src={img} alt="img" width={400} height={300} />
        <Link href={path} className="icon img-popup2">
        <i className="bi bi-plus-lg"></i>
        </Link>
        <div className="content">
            <h4><Link href={path}>{title}</Link></h4>
            <p>{content}</p>
        </div>
    </div>
    );
};

export default DestinationCard;