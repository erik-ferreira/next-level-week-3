import Image from "../models/Image";

export default {
  render(image: Image) {
    const { id, path } = image;

    return { id, url: `http://10.0.0.106:3333/uploads/${path}` };
  },

  renderMany(images: Image[]) {
    return images.map((image) => this.render(image));
  },
};
