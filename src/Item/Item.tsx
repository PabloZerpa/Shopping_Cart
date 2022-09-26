
//Types
import { CartItemType } from '../App';
//Styles
import Button from '@material-ui/core/Button';
import { Wrapper } from './Item.styles';

type Props = {
    item: CartItemType;
    handleAddToCart: (clickedItem: CartItemType) => void;
}

const Item:React.FC<Props> = ({item, handleAddToCart}) => (
    <Wrapper>
        <img src={item.images} alt={item.title} />
        <div>
            <h3>{item.title}</h3>
            <p>{item.title}</p>
            <p>${item.price}</p>
        </div>
        <Button onClick={() => handleAddToCart}>Add to cart</Button>
    </Wrapper>
)

export default Item;