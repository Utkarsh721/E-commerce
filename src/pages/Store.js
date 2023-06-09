import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import styles from './Home.module.css';
import data from '../data'

const ProductCard = () => {
  
  return (
    <div >
      <h1 className={styles.h2} >Products</h1>
      <Card>
      <div className={styles.container}>
      <Row xs={1} md={3} className="g-4">
      
        {
  data.map((item)=>{
  return   (<li key={item.id}>
    
    <div className={styles.containermain}>
    <div className={styles.box1}>
     <img src={item.img} alt={item.title} className={styles.img}/>

     <div className={styles.box2}>
            <h4>{item.title}</h4>
            <h4>{`Rs.${item.price}`}</h4>
    <Button className={styles.button}>Add to Cart</Button>
</div>
</div>
</div>

    </li>)
})
}
</Row>
</div>
</Card>
</div>  
)
}


export default ProductCard;

