import { randUuid, randCompanyName, randNumber, randFloat } from '@ngneat/falso';

export class BuilderProduct {
  productId: string
  storeId: string
  name: string
  category: string
  quantity: number
  price: number
  isAvailable: boolean

  constructor(
    productId?: string,
    storeId?: string,
    name?: string,
    category?: string,
    quantity?: number,
    price?: number,
    isAvailable?: boolean,
  ) {
    this.productId = productId ?? randUuid();
    this.storeId = storeId ?? randUuid();
    this.name = name ?? randCompanyName();
    this.category = category ?? this.getRandomCategory();
    this.quantity = quantity ??  randNumber({ min: 1, max: 20 })
    this.price = price ??  randFloat({ min: 5, max: 100 })
    this.isAvailable = isAvailable ??  true
  }
  
  setProductId(productId: string): this {
    this.productId = productId;
    return this;
  }

  setStoreId(storeId: string): this {
    this.storeId = storeId;
    return this;
  }

  setName(name: string): this {
    this.name = name;
    return this;
  }

  setCategory(category: string): this {
    this.category = category;
    return this;
  }

  setQuantity(quantity: number): this {
    this.quantity = quantity;
    return this;
  }

  setPrice(price: number): this {
    this.price = price;
    return this;
  }

  setIsAvailable(isAvailable: boolean): this {
    this.isAvailable = isAvailable;
    return this;
  }
  
  build(): BuilderProduct {
    if (
      !this.productId ||
      !this.storeId ||
      !this.name ||
      !this.category ||
      !this.quantity ||
      !this.price ||
      !this.isAvailable
    ) {
      throw new Error("Missing required fields for IBuilderProduct.");
    }

    return new BuilderProduct(
      this.productId,
      this.storeId,
      this.name,
      this.category,
      this.quantity,
      this.price,
      this.isAvailable
    );
  }

  private getRandomCategory(): string {
    const categories = ["Food", "Technology", "Clothing", "Books", "Furniture"];
    return categories[Math.floor(Math.random() * categories.length)];
  }
}
