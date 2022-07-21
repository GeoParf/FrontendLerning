function find(arr, id) {
  return arr.find(el => el.id === id);
}

module.exports = {
  add(cart, item) {
    cart.items.push(item);
    return cart;
  },
  change(cart, id, amount) {
    const el = find(cart.items, id);
    el.amount += amount
    return cart;
  },

  remove(cart, id) {
    cart.items = cart.items.filter(el => el.id !== id);
    return cart;
  },

  countTotal(cart) {
    let totalPrice = 0;
    cart.items.forEach(element => {
      const PriceOfItem = element.amount * Number(element.price);
      totalPrice += PriceOfItem;
    });
    return totalPrice;
  }
}