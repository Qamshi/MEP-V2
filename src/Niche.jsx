import { Select, SelectItem, SelectSection } from "@nextui-org/react";
import React from "react";

export default function App() {
    const headingClasses = "flex w-full sticky top-1 z-20 py-1.5 px-2 bg-default-100 shadow-small rounded-small";

  return (
    <Select
      label="Select Niche"
      placeholder="Select Your Product Niche"
      className="max-w-xs"
      variant="bordered"
      scrollShadowProps={{isEnabled : false,}}
    >
      <SelectSection showDivider classNames={{heading: headingClasses,}} title="Groceries & Pets">
        <SelectItem key="1">Fresh Produce</SelectItem>
        <SelectItem key="2">Dry Fruits</SelectItem>
        <SelectItem key="3">Breakfast, Choco & Snacks</SelectItem>
        <SelectItem key="4">Beverages</SelectItem>
        <SelectItem key="5">Food Staples</SelectItem>
        <SelectItem key="6">Laundry & Household</SelectItem>
        <SelectItem key="7">Frozen Food</SelectItem>
        <SelectItem key="8">Cat</SelectItem>
        <SelectItem key="9">Dog</SelectItem>
        <SelectItem key="10">Fish</SelectItem>
      </SelectSection>
      <SelectSection showDivider classNames={{heading: headingClasses,}} title="Health & Beauty">
        <SelectItem key="11">Makeup</SelectItem>
        <SelectItem key="12">Beauty Tools</SelectItem>
        <SelectItem key="13">Skin Care</SelectItem>
        <SelectItem key="14">Bath & Body</SelectItem>
        <SelectItem key="15">Men's Care</SelectItem>
        <SelectItem key="16">Personal Care</SelectItem>
        <SelectItem key="17">Fragrances</SelectItem>
        <SelectItem key="18">Sexual Wellness</SelectItem>
        <SelectItem key="19">Medical Supplies</SelectItem>
      </SelectSection>
      <SelectSection showDivider classNames={{heading: headingClasses,}} title="Men's Fashion">
        <SelectItem key="20">T-Shirts & Tanks</SelectItem>
        <SelectItem key="21">Shirts & Polo</SelectItem>
        <SelectItem key="22">Pants & Jeans</SelectItem>
        <SelectItem key="23">Shorts, Joggers & Sweats</SelectItem>
        <SelectItem key="24">Kurtas & Shalwar Kameez</SelectItem>
        <SelectItem key="25">Winter Clothing</SelectItem>
        <SelectItem key="26">Inner Wear</SelectItem>
        <SelectItem key="27">Shoes</SelectItem>
        <SelectItem key="28">Boy's Clothing</SelectItem>
        <SelectItem key="29">Boy's Shoes</SelectItem>
        <SelectItem key="30">Boy's Accessories</SelectItem>
      </SelectSection>
      <SelectSection showDivider classNames={{heading: headingClasses,}} title="Women's Fashion">
        <SelectItem key="31">Unstitched Fabric</SelectItem>
        <SelectItem key="32">Kurtas & Shalwar Kameez</SelectItem>
        <SelectItem key="33">Tops</SelectItem>
        <SelectItem key="34">Muslim Wear</SelectItem>
        <SelectItem key="35">Sleepwear & Innerwear</SelectItem>
        <SelectItem key="36">Bras, Panties & Lingerie</SelectItem>
        <SelectItem key="37">Pants, Jeans & Leggings</SelectItem>
        <SelectItem key="38">Dresses & Skirts</SelectItem>
        <SelectItem key="39">Winter Clothing</SelectItem>
        <SelectItem key="40">Shoes</SelectItem>
        <SelectItem key="41">Girls Clothing</SelectItem>
        <SelectItem key="42">Girls Shoes</SelectItem>
      </SelectSection>
      <SelectSection showDivider classNames={{heading: headingClasses,}} title="Mother & Baby">
  <SelectItem key="milk_formula_baby_food">Milk Formula & Baby Food</SelectItem>
  <SelectItem key="diapering_potty">Diapering & Potty</SelectItem>
  <SelectItem key="feeding">Feeding</SelectItem>
  <SelectItem key="maternity_care">Maternity Care</SelectItem>
  <SelectItem key="baby_gear">Baby Gear</SelectItem>
  <SelectItem key="nursery">Nursery</SelectItem>
  <SelectItem key="baby_personal_care">Baby Personal Care</SelectItem>
  <SelectItem key="clothing_accessories">Clothing & Accessories</SelectItem>
  <SelectItem key="baby_toddler_toys">Baby & Toddler Toys</SelectItem>
  <SelectItem key="remote_control_vehicles">Remote Control & Vehicles</SelectItem>
  <SelectItem key="sports_outdoor_play">Sports & Outdoor Play</SelectItem>
  <SelectItem key="toys_games">Toys & Games</SelectItem>
</SelectSection>

<SelectSection showDivider classNames={{heading: headingClasses,}} title="Home & Lifestyle">
  <SelectItem key="bath">Bath</SelectItem>
  <SelectItem key="bedding">Bedding</SelectItem>
  <SelectItem key="decor">Decor</SelectItem>
  <SelectItem key="furniture">Furniture</SelectItem>
  <SelectItem key="kitchen_dining">Kitchen & Dining</SelectItem>
  <SelectItem key="lighting">Lighting</SelectItem>
  <SelectItem key="laundry_cleaning">Laundry & Cleaning</SelectItem>
  <SelectItem key="tools_diy_outdoor">Tools, DIY & Outdoor</SelectItem>
  <SelectItem key="stationery_craft">Stationery & Craft</SelectItem>
  <SelectItem key="media_music_books">Media, Music & Books</SelectItem>
</SelectSection>
<SelectSection showDivider classNames={{ heading: headingClasses }} title="Electronic Devices">
  <SelectItem key="smart_phones">Smart Phones</SelectItem>
  <SelectItem key="feature_phones">Feature Phones</SelectItem>
  <SelectItem key="tablets">Tablets</SelectItem>
  <SelectItem key="monitors">Monitors</SelectItem>
  <SelectItem key="laptops">Laptops</SelectItem>
  <SelectItem key="desktops">Desktops</SelectItem>
  <SelectItem key="smart_watches">Smart Watches</SelectItem>
  <SelectItem key="gaming_consoles">Gaming Consoles</SelectItem>
  <SelectItem key="cameras_drones">Cameras & Drones</SelectItem>
  <SelectItem key="security_cameras">Security Cameras</SelectItem>
  <SelectItem key="daraz_like_new">Daraz Like New</SelectItem>
  <SelectItem key="landline_phones">Landline Phones</SelectItem>
</SelectSection>
<SelectSection showDivider classNames={{ heading: headingClasses }} title="Electronic Accessories">
  <SelectItem key="mobile_accessories">Mobile Accessories</SelectItem>
  <SelectItem key="headphones_headsets">Headphones & Headsets</SelectItem>
  <SelectItem key="wearable">Wearable</SelectItem>
  <SelectItem key="camera_accessories">Camera Accessories</SelectItem>
  <SelectItem key="computer_accessories">Computer Accessories</SelectItem>
  <SelectItem key="storage">Storage</SelectItem>
  <SelectItem key="printers">Printers</SelectItem>
  <SelectItem key="computer_components">Computer Components</SelectItem>
  <SelectItem key="portable_speakers">Portable Speakers</SelectItem>
  <SelectItem key="network_components">Network Components</SelectItem>
  <SelectItem key="gaming_accessories">Gaming Accessories</SelectItem>
  <SelectItem key="monitors_accessories">Monitors & Accessories</SelectItem>
</SelectSection>
<SelectSection showDivider classNames={{ heading: headingClasses }} title="TV & Home Appliances">
  <SelectItem key="air_conditioner">Air Conditioner</SelectItem>
  <SelectItem key="televisions">Televisions</SelectItem>
  <SelectItem key="refrigerators_freezers">Refrigerators & Freezers</SelectItem>
  <SelectItem key="home_audio_theater">Home Audio & Theater</SelectItem>
  <SelectItem key="washing_machine">Washing Machine</SelectItem>
  <SelectItem key="kitchen_appliances">Kitchen Appliances</SelectItem>
  <SelectItem key="cooling_heating">Cooling & Heating</SelectItem>
  <SelectItem key="irons_garment_care">Irons & Garment Care</SelectItem>
  <SelectItem key="generator_ups_solar">Generator, UPS & Solar</SelectItem>
  <SelectItem key="projectors_players">Projectors & Players</SelectItem>
  <SelectItem key="tv_accessories">TV Accessories</SelectItem>
  <SelectItem key="vacuums_floor_care">Vacuums & Floor Care</SelectItem>
</SelectSection>
<SelectSection showDivider classNames={{ heading: headingClasses }} title="Sports & Outdoor">
  <SelectItem key="exercise_fitness">Exercise & Fitness</SelectItem>
  <SelectItem key="supplements">Supplements</SelectItem>
  <SelectItem key="shoes_clothing">Shoes & Clothing</SelectItem>
  <SelectItem key="team_sports">Team Sports</SelectItem>
  <SelectItem key="racket_sports">Racket Sports</SelectItem>
  <SelectItem key="outdoor_recreation">Outdoor Recreation</SelectItem>
  <SelectItem key="fitness_gadgets">Fitness Gadgets</SelectItem>
  <SelectItem key="sports_accessories">Sports Accessories</SelectItem>
</SelectSection>
<SelectSection showDivider classNames={{ heading: headingClasses }} title="Watches, Bags & Jewellery">
  <SelectItem key="mens_watches">Men's Watches</SelectItem>
  <SelectItem key="womens_watches">Women's Watches</SelectItem>
  <SelectItem key="kids_watches">Kid's Watches</SelectItem>
  <SelectItem key="womens_bags">Women's Bags</SelectItem>
  <SelectItem key="mens_bags">Men's Bags</SelectItem>
  <SelectItem key="luggage_suitcase">Luggage & Suitcase</SelectItem>
  <SelectItem key="womens_jewellery">Women's Jewellery</SelectItem>
  <SelectItem key="mens_jewellery">Men's Jewellery</SelectItem>
  <SelectItem key="mens_accessories">Men's Accessories</SelectItem>
  <SelectItem key="womens_accessories">Women's Accessories</SelectItem>
  <SelectItem key="sunglasses_eyewear">Sunglasses & Eyewear</SelectItem>
</SelectSection>
<SelectSection showDivider classNames={{ heading: headingClasses }} title="Automotive & Motorbike">
  <SelectItem key="automotive">Automotive</SelectItem>
  <SelectItem key="motorcycle">Motorcycle</SelectItem>
  <SelectItem key="loaders_rickshaw">Loaders & Rickshaw</SelectItem>
</SelectSection>


    </Select>
  );
}