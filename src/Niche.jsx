// import { Select, SelectItem, SelectSection } from "@nextui-org/react";
// import React from "react";
// import { useTextareaContext } from "./TextareaProvider"; // Import the context hook


// export default function App() {
//   const headingClasses = "flex w-full sticky top-1 z-20 py-1.5 px-2 bg-default-100 shadow-small rounded-small";
//   const { setSelectedItemFromSelect } = useTextareaContext(); // Get the update function from context
//   const handleSelectChange = (item) => {
//     setSelectedItemFromSelect(item);
//   };

//   return (
//     <Select
//       label="Select Niche"
//       placeholder="Select Your Product Niche"
//       className="max-w-xs"
//       variant="bordered"
//       scrollShadowProps={{ isEnabled: false, }}
//       isRequired
//       size="lg"
//       onChange={handleSelectChange} // Pass the handleSelectChange function to the Select component

//     >
//       <SelectSection showDivider classNames={{ heading: headingClasses, }} title="Groceries & Pets">
//         <SelectItem key="Fresh Produce">Fresh Produce</SelectItem>
//         <SelectItem key="Dry Fruits">Dry Fruits</SelectItem>
//         <SelectItem key="Breakfast, Choco & Snacks">Breakfast, Choco & Snacks</SelectItem>
//         <SelectItem key="Beverages">Beverages</SelectItem>
//         <SelectItem key="Food Staples">Food Staples</SelectItem>
//         <SelectItem key="Laundry & Household">Laundry & Household</SelectItem>
//         <SelectItem key="Frozen Food">Frozen Food</SelectItem>
//         <SelectItem key="Cat">Cat</SelectItem>
//         <SelectItem key="Dog">Dog</SelectItem>
//         <SelectItem key="Fish">Fish</SelectItem>
//       </SelectSection>
//       <SelectSection showDivider classNames={{ heading: headingClasses, }} title="Health & Beauty">
//         <SelectItem key="Makeup">Makeup</SelectItem>
//         <SelectItem key="Beauty Tools">Beauty Tools</SelectItem>
//         <SelectItem key="Skin Care">Skin Care</SelectItem>
//         <SelectItem key="Bath & Body">Bath & Body</SelectItem>
//         <SelectItem key="Men's Care">Men's Care</SelectItem>
//         <SelectItem key="Personal Care">Personal Care</SelectItem>
//         <SelectItem key="Fragrances">Fragrances</SelectItem>
//         <SelectItem key="Sexual Wellness">Sexual Wellness</SelectItem>
//         <SelectItem key="Medical Supplies">Medical Supplies</SelectItem>
//       </SelectSection>
//       <SelectSection showDivider classNames={{ heading: headingClasses, }} title="Men's Fashion">
//         <SelectItem key="T-Shirts & Tanks">T-Shirts & Tanks</SelectItem>
//         <SelectItem key="Shirts & Polo">Shirts & Polo</SelectItem>
//         <SelectItem key="Pants & Jeans">Pants & Jeans</SelectItem>
//         <SelectItem key="Shorts, Joggers & Sweats">Shorts, Joggers & Sweats</SelectItem>
//         <SelectItem key="Kurtas & Shalwar Kameez">Kurtas & Shalwar Kameez</SelectItem>
//         <SelectItem key="Winter Clothing">Winter Clothing</SelectItem>
//         <SelectItem key="Inner Wear">Inner Wear</SelectItem>
//         <SelectItem key="Shoes">Shoes</SelectItem>
//         <SelectItem key="Boy's Clothing">Boy's Clothing</SelectItem>
//         <SelectItem key="Boy's Shoes">Boy's Shoes</SelectItem>
//         <SelectItem key="Boy's Accessories">Boy's Accessories</SelectItem>
//       </SelectSection>
//       <SelectSection showDivider classNames={{ heading: headingClasses, }} title="Women's Fashion">
//         <SelectItem key="Unstitched Fabric">Unstitched Fabric</SelectItem>
//         <SelectItem key="Kurtas & Shalwar Kameez">Kurtas & Shalwar Kameez</SelectItem>
//         <SelectItem key="Tops">Tops</SelectItem>
//         <SelectItem key="Muslim Wear">Muslim Wear</SelectItem>
//         <SelectItem key="Sleepwear & Innerwear">Sleepwear & Innerwear</SelectItem>
//         <SelectItem key="Bras, Panties & Lingerie">Bras, Panties & Lingerie</SelectItem>
//         <SelectItem key="Pants, Jeans & Leggings">Pants, Jeans & Leggings</SelectItem>
//         <SelectItem key="Dresses & Skirts">Dresses & Skirts</SelectItem>
//         <SelectItem key="Winter Clothing">Winter Clothing</SelectItem>
//         <SelectItem key="Shoes">Shoes</SelectItem>
//         <SelectItem key="Girls Clothing">Girls Clothing</SelectItem>
//         <SelectItem key="Girls Shoes">Girls Shoes</SelectItem>
//       </SelectSection>
//       <SelectSection showDivider classNames={{ heading: headingClasses, }} title="Mother & Baby">
//         <SelectItem key="Milk Formula & Baby Food">Milk Formula & Baby Food</SelectItem>
//         <SelectItem key="Diapering & Potty">Diapering & Potty</SelectItem>
//         <SelectItem key="Feeding">Feeding</SelectItem>
//         <SelectItem key="Maternity Care">Maternity Care</SelectItem>
//         <SelectItem key="Baby Gear">Baby Gear</SelectItem>
//         <SelectItem key="Nursery">Nursery</SelectItem>
//         <SelectItem key="Baby Personal Care">Baby Personal Care</SelectItem>
//         <SelectItem key="Clothing & Accessories">Clothing & Accessories</SelectItem>
//         <SelectItem key="Baby & Toddler Toys">Baby & Toddler Toys</SelectItem>
//         <SelectItem key="Remote Control & Vehicles">Remote Control & Vehicles</SelectItem>
//         <SelectItem key="Sports & Outdoor Play">Sports & Outdoor Play</SelectItem>
//         <SelectItem key="Toys & Games">Toys & Games</SelectItem>
//       </SelectSection>

//       <SelectSection showDivider classNames={{ heading: headingClasses, }} title="Home & Lifestyle">
//         <SelectItem key="Bath">Bath</SelectItem>
//         <SelectItem key="Bedding">Bedding</SelectItem>
//         <SelectItem key="Decor">Decor</SelectItem>
//         <SelectItem key="Furniture">Furniture</SelectItem>
//         <SelectItem key="Kitchen & Dining">Kitchen & Dining</SelectItem>
//         <SelectItem key="Lighting">Lighting</SelectItem>
//         <SelectItem key="Laundry & Cleaning">Laundry & Cleaning</SelectItem>
//         <SelectItem key="Tools, DIY & Outdoor">Tools, DIY & Outdoor</SelectItem>
//         <SelectItem key="Stationery & Craft">Stationery & Craft</SelectItem>
//         <SelectItem key="Media, Music & Books">Media, Music & Books</SelectItem>
//       </SelectSection>
//       <SelectSection showDivider classNames={{ heading: headingClasses }} title="Electronic Devices">
//         <SelectItem key="Smart Phones">Smart Phones</SelectItem>
//         <SelectItem key="Feature Phones">Feature Phones</SelectItem>
//         <SelectItem key="Tablets">Tablets</SelectItem>
//         <SelectItem key="Monitors">Monitors</SelectItem>
//         <SelectItem key="Laptops">Laptops</SelectItem>
//         <SelectItem key="Desktops">Desktops</SelectItem>
//         <SelectItem key="Smart Watches">Smart Watches</SelectItem>
//         <SelectItem key="Gaming Consoles">Gaming Consoles</SelectItem>
//         <SelectItem key="Cameras & Drones">Cameras & Drones</SelectItem>
//         <SelectItem key="Security Cameras">Security Cameras</SelectItem>
//         <SelectItem key="Daraz Like New">Daraz Like New</SelectItem>
//         <SelectItem key="Landline Phones">Landline Phones</SelectItem>
//       </SelectSection>
//       <SelectSection showDivider classNames={{ heading: headingClasses }} title="Electronic Accessories">
//         <SelectItem key="Mobile Accessories">Mobile Accessories</SelectItem>
//         <SelectItem key="Headphones & Headsets">Headphones & Headsets</SelectItem>
//         <SelectItem key="Wearable">Wearable</SelectItem>
//         <SelectItem key="Camera Accessories">Camera Accessories</SelectItem>
//         <SelectItem key="Computer Accessories">Computer Accessories</SelectItem>
//         <SelectItem key="Storage">Storage</SelectItem>
//         <SelectItem key="Printers">Printers</SelectItem>
//         <SelectItem key="Computer Components">Computer Components</SelectItem>
//         <SelectItem key="Portable Speakers">Portable Speakers</SelectItem>
//         <SelectItem key="Network Components">Network Components</SelectItem>
//         <SelectItem key="Gaming Accessories">Gaming Accessories</SelectItem>
//         <SelectItem key="Monitors & Accessories">Monitors & Accessories</SelectItem>
//       </SelectSection>
//       <SelectSection showDivider classNames={{ heading: headingClasses }} title="TV & Home Appliances">
//         <SelectItem key="Air Conditioner">Air Conditioner</SelectItem>
//         <SelectItem key="Televisions">Televisions</SelectItem>
//         <SelectItem key="Refrigerators & Freezers">Refrigerators & Freezers</SelectItem>
//         <SelectItem key="Home Audio & Theater">Home Audio & Theater</SelectItem>
//         <SelectItem key="Washing Machine">Washing Machine</SelectItem>
//         <SelectItem key="Kitchen Appliances">Kitchen Appliances</SelectItem>
//         <SelectItem key="Cooling & Heating">Cooling & Heating</SelectItem>
//         <SelectItem key="Irons & Garment Care">Irons & Garment Care</SelectItem>
//         <SelectItem key="Generator, UPS & Solar">Generator, UPS & Solar</SelectItem>
//         <SelectItem key="Projectors & Players">Projectors & Players</SelectItem>
//         <SelectItem key="TV Accessories">TV Accessories</SelectItem>
//         <SelectItem key="Vacuums & Floor Care">Vacuums & Floor Care</SelectItem>
//       </SelectSection>
//       <SelectSection showDivider classNames={{ heading: headingClasses }} title="Sports & Outdoor">
//         <SelectItem key="Exercise & Fitness">Exercise & Fitness</SelectItem>
//         <SelectItem key="Supplements">Supplements</SelectItem>
//         <SelectItem key="Shoes & Clothing">Shoes & Clothing</SelectItem>
//         <SelectItem key="Team Sports">Team Sports</SelectItem>
//         <SelectItem key="Racket Sports">Racket Sports</SelectItem>
//         <SelectItem key="Outdoor Recreation">Outdoor Recreation</SelectItem>
//         <SelectItem key="Fitness Gadgets">Fitness Gadgets</SelectItem>
//         <SelectItem key="Sports Accessories">Sports Accessories</SelectItem>
//       </SelectSection>
//       <SelectSection showDivider classNames={{ heading: headingClasses }} title="Watches, Bags & Jewellery">
//         <SelectItem key="Men's Watches">Men's Watches</SelectItem>
//         <SelectItem key="Women's Watches">Women's Watches</SelectItem>
//         <SelectItem key="Kid's Watches">Kid's Watches</SelectItem>
//         <SelectItem key="Women's Bags">Women's Bags</SelectItem>
//         <SelectItem key="Men's Bags">Men's Bags</SelectItem>
//         <SelectItem key="Luggage & Suitcase">Luggage & Suitcase</SelectItem>
//         <SelectItem key="Women's Jewellery">Women's Jewellery</SelectItem>
//         <SelectItem key="Men's Jewellery">Men's Jewellery</SelectItem>
//         <SelectItem key="Men's Accessories">Men's Accessories</SelectItem>
//         <SelectItem key="Women's Accessories">Women's Accessories</SelectItem>
//         <SelectItem key="Sunglasses & Eyewear">Sunglasses & Eyewear</SelectItem>
//       </SelectSection>
//       <SelectSection showDivider classNames={{ heading: headingClasses }} title="Automotive & Motorbike">
//         <SelectItem key="Automotive">Automotive</SelectItem>
//         <SelectItem key="Motorcycle">Motorcycle</SelectItem>
//         <SelectItem key="Loaders & Rickshaw">Loaders & Rickshaw</SelectItem>
//       </SelectSection>
//     </Select>
//   );
// }

























import { Select, SelectItem, SelectSection } from "@nextui-org/react";
import React from "react";
import { useTextareaContext } from "./TextareaProvider"; // Import the context hook


export default function App() {
  const headingClasses = "flex w-full sticky top-1 z-20 py-1.5 px-2 bg-default-100 shadow-small rounded-small";
  const { setniche } = useTextareaContext(); // Get the update function from context
  const handleSelectChange = (event) => {
    console.log(event.target.value); // Adjusted to use event.target.value
    setniche(event.target.value); // Adjusted to use event.target.value
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
        <SelectItem key="Skin">Skin Care</SelectItem>
        <SelectItem key="Bath">Bath & Body</SelectItem>
        <SelectItem key="Men's Care">Men's Care</SelectItem>
        <SelectItem key="Personal Care">Personal Care</SelectItem>
        <SelectItem key="Fragrances">Fragrances</SelectItem>
        <SelectItem key="Sexual Wellness">Sexual Wellness</SelectItem>
        <SelectItem key="Medical Supplies">Medical Supplies</SelectItem>
      </SelectSection>
      <SelectSection showDivider classNames={{ heading: headingClasses, }} title="Men's Fashion">
        <SelectItem key="T-Shirts">T-Shirts & Tanks</SelectItem>
        <SelectItem key="Shirts">Shirts & Polo</SelectItem>
        <SelectItem key="Pants">Pants & Jeans</SelectItem>
        <SelectItem key="Shorts">Shorts, Joggers & Sweats</SelectItem>
        <SelectItem key="Kurtas">Kurtas & Shalwar Kameez</SelectItem>
        <SelectItem key="Winter">Winter Clothing</SelectItem>
        <SelectItem key="Inner">Inner Wear</SelectItem>
        <SelectItem key="Shoes">Shoes</SelectItem>
        <SelectItem key="Clothing">Boy's Clothing</SelectItem>
        <SelectItem key="Shoes">Boy's Shoes</SelectItem>
        <SelectItem key="Accessories">Boy's Accessories</SelectItem>
      </SelectSection>
      <SelectSection showDivider classNames={{ heading: headingClasses, }} title="Women's Fashion">
        <SelectItem key="Fabric">Unstitched Fabric</SelectItem>
        <SelectItem key="Shalwar Kameez">Kurtas & Shalwar Kameez</SelectItem>
        <SelectItem key="Tops">Tops</SelectItem>
        <SelectItem key="Muslim Wear">Muslim Wear</SelectItem>
        <SelectItem key="Sleepwear">Sleepwear & Innerwear</SelectItem>
        <SelectItem key="Bras">Bras, Panties & Lingerie</SelectItem>
        <SelectItem key="Jeans">Pants, Jeans & Leggings</SelectItem>
        <SelectItem key="Dresses">Dresses & Skirts</SelectItem>
        <SelectItem key="Winter">Winter Clothing</SelectItem>
        <SelectItem key="Shoes">Shoes</SelectItem>
        <SelectItem key="Clothing">Girls Clothing</SelectItem>
        <SelectItem key="Shoes">Girls Shoes</SelectItem>
      </SelectSection>
      <SelectSection showDivider classNames={{ heading: headingClasses, }} title="Mother & Baby">
        <SelectItem key="Milk">Milk Formula & Baby Food</SelectItem>
        <SelectItem key="Diapering">Diapering & Potty</SelectItem>
        <SelectItem key="Feeding">Feeding</SelectItem>
        <SelectItem key="Maternity">Maternity Care</SelectItem>
        <SelectItem key="Baby">Baby Gear</SelectItem>
        <SelectItem key="Nursery">Nursery</SelectItem>
        <SelectItem key="BabyCare">Baby Personal Care</SelectItem>
        <SelectItem key="ClothingAccessories">Clothing & Accessories</SelectItem>
        <SelectItem key="Baby">Baby & Toddler Toys</SelectItem>
        <SelectItem key="Remote">Remote Control & Vehicles</SelectItem>
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
        <SelectItem key="Tools">Tools, DIY & Outdoor</SelectItem>
        <SelectItem key="Stationery">Stationery & Craft</SelectItem>
        <SelectItem key="Media">Media, Music & Books</SelectItem>
      </SelectSection>
      <SelectSection showDivider classNames={{ heading: headingClasses }} title="Electronic Devices">
        <SelectItem key="Smart Phones">Smart Phones</SelectItem>
        <SelectItem key="Feature Phones">Feature Phones</SelectItem>
        <SelectItem key="Tablets">Tablets</SelectItem>
        <SelectItem key="Monitors">Monitors</SelectItem>
        <SelectItem key="Laptops">Laptops</SelectItem>
        <SelectItem key="Desktops">Desktops</SelectItem>
        <SelectItem key="Watches">Smart Watches</SelectItem>
        <SelectItem key="Gaming ">Gaming Consoles</SelectItem>
        <SelectItem key="Cameras">Cameras & Drones</SelectItem>
        <SelectItem key="Security Cameras">Security Cameras</SelectItem>
        <SelectItem key="Daraz Like New">Daraz Like New</SelectItem>
        <SelectItem key="Landline Phones">Landline Phones</SelectItem>
      </SelectSection>
      <SelectSection showDivider classNames={{ heading: headingClasses }} title="Electronic Accessories">
        <SelectItem key="Mobile Accessories">Mobile Accessories</SelectItem>
        <SelectItem key="Headphones & Headsets">Headphones & Headsets</SelectItem>
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
        <SelectItem key="Refrigerators">Refrigerators & Freezers</SelectItem>
        <SelectItem key="Home Audio">Home Audio & Theater</SelectItem>
        <SelectItem key="Washing Machine">Washing Machine</SelectItem>
        <SelectItem key="Kitchen Appliances">Kitchen Appliances</SelectItem>
        <SelectItem key="Cooling ">Cooling & Heating</SelectItem>
        <SelectItem key="Irons">Irons & Garment Care</SelectItem>
        <SelectItem key="Generator">Generator, UPS & Solar</SelectItem>
        <SelectItem key="Projectors">Projectors & Players</SelectItem>
        <SelectItem key="TV Accessories">TV Accessories</SelectItem>
        <SelectItem key="Vacuums">Vacuums & Floor Care</SelectItem>
      </SelectSection>
      <SelectSection showDivider classNames={{ heading: headingClasses }} title="Sports & Outdoor">
        <SelectItem key="Exercise">Exercise & Fitness</SelectItem>
        <SelectItem key="Supplements">Supplements</SelectItem>
        <SelectItem key="Shoes">Shoes & Clothing</SelectItem>
        <SelectItem key="Team">Team Sports</SelectItem>
        <SelectItem key="Racket">Racket Sports</SelectItem>
        <SelectItem key="Outdoor">Outdoor Recreation</SelectItem>
        <SelectItem key="Fitness">Fitness Gadgets</SelectItem>
        <SelectItem key="Sports">Sports Accessories</SelectItem>
      </SelectSection>
      <SelectSection showDivider classNames={{ heading: headingClasses }} title="Watches, Bags & Jewellery">
        <SelectItem key="Men's">Men's Watches</SelectItem>
        <SelectItem key="Women's">Women's Watches</SelectItem>
        <SelectItem key="Kid's">Kid's Watches</SelectItem>
        <SelectItem key="Women's">Women's Bags</SelectItem>
        <SelectItem key="Men's">Men's Bags</SelectItem>
        <SelectItem key="Luggage">Luggage & Suitcase</SelectItem>
        <SelectItem key="Women's">Women's Jewellery</SelectItem>
        <SelectItem key="Men's">Men's Jewellery</SelectItem>
        <SelectItem key="Men's">Men's Accessories</SelectItem>
        <SelectItem key="Women's">Women's Accessories</SelectItem>
        <SelectItem key="Sunglasses">Sunglasses & Eyewear</SelectItem>
      </SelectSection>
      <SelectSection showDivider classNames={{ heading: headingClasses }} title="Automotive & Motorbike">
        <SelectItem key="Automotive">Automotive</SelectItem>
        <SelectItem key="Motorcycle">Motorcycle</SelectItem>
        <SelectItem key="Truck">Loaders & Rickshaw</SelectItem>
      </SelectSection>
    </Select>
  );
}
