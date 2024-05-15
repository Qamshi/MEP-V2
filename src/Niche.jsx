
import { Select, SelectItem, SelectSection } from "@nextui-org/react";
import React from "react";
import { useTextareaContext } from "./TextareaProvider"; // Import the context hook


export default function App() {
  const headingClasses = "flex w-full sticky top-1 z-20 py-1.5 px-2 bg-default-100 shadow-small rounded-small";
  const { setniche } = useTextareaContext(); // Get the update function from context
  const handleSelectChange = (event) => {
    console.log(event.target.value); // Adjusted to use event.target.value
    setniche(event.target.value); 
  };

  return (
    <Select
      label="Select Niche"
      placeholder="Select Your Product Niche"
      className="max-w-xs"
      variant="bordered"
      scrollShadowProps={{ isEnabled: false, }}
      isRequired
      size="lg"
      onChange={handleSelectChange} // Pass the handleSelectChange function to the Select component

    >
      <SelectSection showDivider classNames={{ heading: headingClasses, }} title="Groceries & Pets">
        <SelectItem key="Fruits">Fruits</SelectItem>
        <SelectItem key="Breakfast">Breakfast</SelectItem>
        <SelectItem key="Beverages">Beverages</SelectItem>
        <SelectItem key="Food">Food Staples</SelectItem>
        <SelectItem key="Laundry">Laundry & Household</SelectItem>
        <SelectItem key="Frozen">Frozen Food</SelectItem>
        <SelectItem key="Cat">Cat</SelectItem>
        <SelectItem key="Dog">Dog</SelectItem>
        <SelectItem key="Fish">Fish</SelectItem>
      </SelectSection>
      <SelectSection showDivider classNames={{ heading: headingClasses, }} title="Health & Beauty">
        <SelectItem key="Makeup">Makeup</SelectItem>
        <SelectItem key="Beauty">Beauty Tools</SelectItem>
        <SelectItem key="Skin care">Skin Care</SelectItem>
        <SelectItem key="Bath">Bath & Body</SelectItem>
        <SelectItem key="Men">Men's Care</SelectItem>
        <SelectItem key="Personal Care">Personal Care</SelectItem>
        <SelectItem key="Fragrances">Fragrances</SelectItem>
        <SelectItem key="Sexual Wellness">Sexual Wellness</SelectItem>
        <SelectItem key="Medical Supplies">Medical Supplies</SelectItem>
      </SelectSection>
      <SelectSection showDivider classNames={{ heading: headingClasses, }} title="Men's Fashion">
        <SelectItem key="T-Shirts">T-Shirts & Tanks</SelectItem>
        <SelectItem key="polo shirt">Shirts & Polo</SelectItem>
        <SelectItem key="Pants">Pants & Jeans</SelectItem>
        <SelectItem key="Shorts">Shorts, Joggers & Sweats</SelectItem>
        <SelectItem key="kameez">Kurtas & Shalwar Kameez</SelectItem>
        <SelectItem key="clothing">Winter Clothing</SelectItem>
        <SelectItem key="clothe">Inner Wear</SelectItem>
        <SelectItem key="Shoes">Shoes</SelectItem>
        <SelectItem key="Clothing">Boy's Clothing</SelectItem>
        <SelectItem key="Shoes">Boy's Shoes</SelectItem>
        <SelectItem key="Accessories">Boy's Accessories</SelectItem>
      </SelectSection>
      <SelectSection showDivider classNames={{ heading: headingClasses, }} title="Women's Fashion">
        <SelectItem key="Fabric">Unstitched Fabric</SelectItem>
        <SelectItem key="kameez">Kurtas & Shalwar Kameez</SelectItem>
        <SelectItem key="Tops">Tops</SelectItem>
        <SelectItem key="clothing">Muslim Wear</SelectItem>
        <SelectItem key="Sleepwear">Sleepwear & Innerwear</SelectItem>
        <SelectItem key="bikini">Bras, Panties & Lingerie</SelectItem>
        <SelectItem key="Jeans">Pants, Jeans & Leggings</SelectItem>
        <SelectItem key="Dresses">Dresses & Skirts</SelectItem>
        <SelectItem key="clothing">Winter Clothing</SelectItem>
        <SelectItem key="Shoes">Shoes</SelectItem>
        <SelectItem key="Clothing">Girls Clothing</SelectItem>
        <SelectItem key="Shoes">Girls Shoes</SelectItem>
      </SelectSection>
      <SelectSection showDivider classNames={{ heading: headingClasses, }} title="Mother & Baby">
        <SelectItem key="Milk Formula & Baby Food">Milk Formula & Baby Food</SelectItem>
        <SelectItem key="Diapers">Diapering & Potty</SelectItem>
        <SelectItem key="baby food">Feeding</SelectItem>
        <SelectItem key="Mother Care">Maternity Care</SelectItem>
        <SelectItem key="Babysitting">Baby Gear</SelectItem>
        <SelectItem key="Nursery">Nursery</SelectItem>
        <SelectItem key="babyshop">Baby Personal Care</SelectItem>
        <SelectItem key="Clothing">Clothing & Accessories</SelectItem>
        <SelectItem key="Toys">Baby & Toddler Toys</SelectItem>
        <SelectItem key="rc car">Remote Control & Vehicles</SelectItem>
        <SelectItem key="Sports">Sports & Outdoor Play</SelectItem>
        <SelectItem key="Toys">Toys & Games</SelectItem>
      </SelectSection>

      <SelectSection showDivider classNames={{ heading: headingClasses, }} title="Home & Lifestyle">
        <SelectItem key="Bath">Bath</SelectItem>
        <SelectItem key="Bedding">Bedding</SelectItem>
        <SelectItem key="Decor">Decor</SelectItem>
        <SelectItem key="Furniture">Furniture</SelectItem>
        <SelectItem key="Kitchen">Kitchen & Dining</SelectItem>
        <SelectItem key="Lighting">Lighting</SelectItem>
        <SelectItem key="Laundry">Laundry & Cleaning</SelectItem>
        <SelectItem key="outdoors tools">Tools, DIY & Outdoor</SelectItem>
        <SelectItem key="Stationery">Stationery & Craft</SelectItem>
        <SelectItem key="Music">Media, Music & Books</SelectItem>
      </SelectSection>
      <SelectSection showDivider classNames={{ heading: headingClasses }} title="Electronic Devices">
        <SelectItem key="Mobile Phones Phones">Smart Phones</SelectItem>
        <SelectItem key="Feature Phones">Feature Phones</SelectItem>
        <SelectItem key="Tablets">Tablets</SelectItem>
        <SelectItem key="Monitors">Monitors</SelectItem>
        <SelectItem key="Laptops">Laptops</SelectItem>
        <SelectItem key="Desktops">Desktops</SelectItem>
        <SelectItem key="Smart Watches">Smart Watches</SelectItem>
        <SelectItem key="Consoles ">Gamings Consoles</SelectItem>
        <SelectItem key="Camera">Cameras & Drones</SelectItem>
        <SelectItem key="Security">Security Cameras</SelectItem>
        <SelectItem key="New">Daraz Like New</SelectItem>
        <SelectItem key="Landline">Landline Phones</SelectItem>
      </SelectSection>
      <SelectSection showDivider classNames={{ heading: headingClasses }} title="Electronic Accessories">
        <SelectItem key="MobileMobile Accessories">Mobile Accessories</SelectItem>
        <SelectItem key="Headphones">Headphones & Headsets</SelectItem>
        <SelectItem key="Wearable">Wearable</SelectItem>
        <SelectItem key="Camera">Camera Accessories</SelectItem>
        <SelectItem key="Computer">Computer Accessories</SelectItem>
        <SelectItem key="Storage">Storage</SelectItem>
        <SelectItem key="Printers">Printers</SelectItem>
        <SelectItem key="Computer ">Computer Components</SelectItem>
        <SelectItem key="Speakers">Portable Speakers</SelectItem>
        <SelectItem key="Network">Network Components</SelectItem>
        <SelectItem key="Gaming">Gaming Accessories</SelectItem>
        <SelectItem key="Monitors">Monitors & Accessories</SelectItem>
      </SelectSection>
      <SelectSection showDivider classNames={{ heading: headingClasses }} title="TV & Home Appliances">
        <SelectItem key="Air Conditioner">Air Conditioner</SelectItem>
        <SelectItem key="Televisions">Televisions</SelectItem>
        <SelectItem key="Refrigerator">Refrigerators & Freezers</SelectItem>
        <SelectItem key="Theater">Home Audio & Theater</SelectItem>
        <SelectItem key="Washing Machine">Washing Machine</SelectItem>
        <SelectItem key="Kitchen">Kitchen Appliances</SelectItem>
        <SelectItem key="Cooling ">Cooling & Heating</SelectItem>
        <SelectItem key="heat press">Irons & Garment Care</SelectItem>
        <SelectItem key="Generator">Generator, UPS & Solar</SelectItem>
        <SelectItem key="Projectors">Projectors & Players</SelectItem>
        <SelectItem key="TV">TV Accessories</SelectItem>
        <SelectItem key="Vacuum">Vacuums & Floor Care</SelectItem>
      </SelectSection>
      <SelectSection showDivider classNames={{ heading: headingClasses }} title="Sports & Outdoor">
        <SelectItem key="Exercise & Fitness">Exercise & Fitness</SelectItem>
        <SelectItem key="Supplements">Supplements</SelectItem>
        <SelectItem key="Shoes">Shoes & Clothing</SelectItem>
        <SelectItem key="Sports">Team Sports</SelectItem>
        <SelectItem key="Sports">Racket Sports</SelectItem>
        <SelectItem key="Outdoor">Outdoor Recreation</SelectItem>
        <SelectItem key="Fitness">Fitness Gadgets</SelectItem>
        <SelectItem key="Sports">Sports Accessories</SelectItem>
      </SelectSection>
      <SelectSection showDivider classNames={{ heading: headingClasses }} title="Watches, Bags & Jewellery">
        <SelectItem key="Watches">Men's Watches</SelectItem>
        <SelectItem key="Watches">Women's Watches</SelectItem>
        <SelectItem key="Watches">Kid's Watches</SelectItem>
        <SelectItem key="hand Bag">Women's Bags</SelectItem>
        <SelectItem key="Bags">Men's Bags</SelectItem>
        <SelectItem key="Suitcase">Luggage & Suitcase</SelectItem>
        <SelectItem key="Jewellery">Women's Jewellery</SelectItem>
        <SelectItem key="Jewellery">Men's Jewellery</SelectItem>
        <SelectItem key="Men">Men's Accessories</SelectItem>
        <SelectItem key="Women">Women's Accessories</SelectItem>
        <SelectItem key="Sunglasses">Sunglasses & Eyewear</SelectItem>
      </SelectSection>
      <SelectSection showDivider classNames={{ heading: headingClasses }} title="Automotive & Motorbike">
        <SelectItem key="Automotive">Automotive</SelectItem>
        <SelectItem key="Motorcycle">Motorcycle</SelectItem>
        <SelectItem key="Truck">truck</SelectItem>
      </SelectSection>
    </Select>
  );
}
