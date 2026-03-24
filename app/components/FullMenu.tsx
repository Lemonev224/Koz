import { Leaf } from 'lucide-react';

interface MenuItem {
  name: string;
  price: string;
  description: string;
  vegetarian?: boolean;
  note?: string;
}

interface MenuCategory {
  title: string;
  items: MenuItem[];
}

export function FullMenu() {
  const menuData: MenuCategory[] = [
    {
      title: "Cold Starters",
      items: [
        {
          name: "Cacik",
          price: "£6.95",
          description: "A refreshing yogurt starter, prepared with finely diced cucumbers dried mint hint of fresh garlic and olive oil.",
          vegetarian: true
        },
        {
          name: "Fetta Cheese",
          price: "£6.95",
          description: "Seasoned to perfection with olive oil, oregano, and red pepper flakes.",
          vegetarian: true
        },
        {
          name: "Hummus",
          price: "£6.95",
          description: "Crushed chickpeas blended with tahini, lemon juice and fresh garlic.",
          vegetarian: true
        },
        {
          name: "Kisir",
          price: "£6.95",
          description: "Prepared with a mixture of crushed wheat, tomato paste, parsley, mixed pepper, herbs, topped with pomegranate molasses and olive oil.",
          vegetarian: true
        },
        {
          name: "Saksuka",
          price: "£6.95",
          description: "Diced aubergine with tomato sauce, peppers, onion, herbs, and garlic.",
          vegetarian: true
        },
        {
          name: "Yaprak Dolma",
          price: "£6.95",
          description: "Stuffed vine leaves with rice, lemon juice and olive oil served with lettuce and lemon.",
          vegetarian: true
        },
        {
          name: "Barbunya Pilaki",
          price: "£6.95",
          description: "Haricot beans prepared with carrots, tomatoes, green peppers, and olive oil.",
          vegetarian: true
        },
        {
          name: "Tarama",
          price: "£4.95",
          description: "A creamy pink mezze made from smoked cod served as a flavorful appetizer.",
          vegetarian: true
        },
        {
          name: "Cold Mix Mezze",
          price: "from £16.95",
          description: "Hummus, cacik, kisir, saksuka, tarama served with bread."
        }
      ]
    },
    {
      title: "Hot Starters",
      items: [
        {
          name: "Sucuk Izgara",
          price: "£7.95",
          description: "Fried Turkish sausages served with Turkish bread."
        },
        {
          name: "Falafel",
          price: "£7.95",
          description: "Lightly fried chickpeas, parsley, carrot, mixed peppers, celery, onions, garlic, and coriander served with hummus.",
          vegetarian: true
        },
        {
          name: "Scampi",
          price: "£7.95",
          description: "Fried scampi served with a slice of lemon and tartar sauce."
        },
        {
          name: "Kalamar",
          price: "£7.95",
          description: "Deep fried fresh squid served with tartar sauce and fresh lemon."
        },
        {
          name: "Hellim",
          price: "£7.95",
          description: "Char grilled halloumi cheese served over lettuce.",
          vegetarian: true
        },
        {
          name: "Sigara Boregi",
          price: "£7.95",
          description: "Fried rolled filo pastry filled with fetta cheese and parsley.",
          vegetarian: true
        },
        {
          name: "Hot Mix Mezze",
          price: "from £18.95",
          description: "Fried Turkish sausage, halloumi, scampi, sigara boregi, kalamar and falafel served with bread."
        }
      ]
    },
    {
      title: "Charcoal Kebabs",
      items: [
        {
          name: "Adana Kebab",
          price: "from £11.95",
          description: "Also known as Kofte Kebab is a Turkish specialty featuring minced meat imbued with a piquant blend of herbs and spices, skewered and seared to smoky succulence by our experienced chef.",
          note: "Available as REG, LRG"
        },
        {
          name: "Chicken Shish",
          price: "from £11.95",
          description: "Juicy, herb-marinated chicken grilled to a golden charm on our authentic charcoal grill, served with a zesty dip and veggies for a smoky, satisfying skewerful of flavors.",
          note: "Available as REG, LRG"
        },
        {
          name: "Chicken Beyti",
          price: "from £11.95",
          description: "Grilled spiced chicken enveloped in a warm flatbread, sliced into spirals, and dressed with creamy garlic yogurt and rich tomato sauce. It's a symphony of smoky, tangy, and creamy flavors in every delicious bite.",
          note: "Available as REG, LRG"
        },
        {
          name: "Lamb Shish",
          price: "from £13.95",
          description: "Succulent cubes of lamb, marinated in aromatic spices, seared over an authentic grill to create a smoky crust with a tender, melt-in-your-mouth interior, accompanied by your choice of sauce and salad.",
          note: "Available as REG, LRG"
        },
        {
          name: "Combo Kebab",
          price: "from £14.95",
          description: "Mix of any two charcoal kebabs, enjoy with your choice of salad, rice, and bread."
        },
        {
          name: "Lamb Ribs",
          price: "from £16.95",
          description: "Juicy and tender lamb ribs, seasoned with a special blend of herbs and spices. Grilled to perfection, ensuring a rich, flavorful experience with every bite. A popular choice for meat lovers."
        },
        {
          name: "Special Combo",
          price: "from £19.95",
          description: "Mix of any three charcoal kebabs, enjoy with your choice of salad, rice, and bread."
        },
        {
          name: "Lamb Chops",
          price: "from £19.95",
          description: "Each chop is a masterful display of grill artistry, with a seared, herb-crusted exterior yielding to lusciously tender meat that bursts with the robust flavors. Kissed by fire and grilled to perfection by our experienced chef."
        },
        {
          name: "Chicken Wings",
          price: "from £11.95",
          description: "Sizzling from the grill, these wings boast a smoky char and are brushed with a glaze that balances sweetness with a subtle kick. Each bite crackles and gives way to succulent, tender meat that's imbued with the essence of the flame."
        },
        {
          name: "Mix Kebab",
          price: "from £26.95",
          description: "Adana, lamb shish, chicken shish, chicken beyti served with rice, salad and bread."
        },
        {
          name: "Koz Mix",
          price: "from £55.95",
          description: "A grand feast of skewered delights, this platter offers a lavish array of marinated meats—juicy chicken, succulent lamb, each piece charred to perfection. it's a sizzling mosaic of textures and tastes, inviting you to indulge in the ultimate grilled experience. Great for sharing or for you only if you feel super-duper hungry."
        }
      ]
    },
    {
      title: "Vegetarian Dishes",
      items: [
        {
          name: "Saksuka",
          price: "£11.95",
          description: "Roasted diced aubergine with tomato sauce, onion, garlic, mixed peppers, and herbs served with rice, bread and salad.",
          vegetarian: true
        },
        {
          name: "Falafel",
          price: "£11.95",
          description: "Lightly fried falafels served with salad, hummus and bread.",
          vegetarian: true
        },
        {
          name: "Vegetarian Kebab",
          price: "£13.95",
          description: "Mushrooms, mixed peppers, onion, tomato, halloumi with herbs, on a skewer cooked on an authentic charcoal grill. Served with rice, salad and bread.",
          vegetarian: true
        }
      ]
    },
    {
      title: "Wraps",
      items: [
        {
          name: "Falafel Wrap",
          price: "from £9.95",
          description: "Falafels with hummus, choice of salad wrapped In traditional Turkish bread.",
          vegetarian: true
        },
        {
          name: "Hellim Wrap",
          price: "from £9.95",
          description: "Halloumi slices wrapped with selected sauce and salads in Turkish bread.",
          vegetarian: true
        },
        {
          name: "Adana Wrap",
          price: "from £11.95",
          description: "Adana kebab (also known as Kofte kebab), choice of salad, dressed in selected sauces wrapped in traditional Turkish bread."
        },
        {
          name: "Lamb Shish Wrap",
          price: "from £11.95",
          description: "Lamb shish, choice of salad, dressed in selected sauces wrapped in traditional Turkish bread."
        },
        {
          name: "Chicken Shish Wrap",
          price: "from £11.95",
          description: "Chicken shish, choice of salad, dressed in selected sauces wrapped in Traditional Turkish bread."
        },
        {
          name: "Chicken Beyti Wrap",
          price: "from £11.95",
          description: "Chicken beyti, choice of salad, dressed in selected sauces wrapped in traditional Turkish bread."
        }
      ]
    },
    {
      title: "Salads",
      items: [
        {
          name: "Green Salad",
          price: "£5.95",
          description: "Diced tomatoes, lettuce, cucumbers, red cabbage, and carrot coated with pomegranate juice and olive oil dressing.",
          vegetarian: true
        },
        {
          name: "Koz Special",
          price: "£8.95",
          description: "Char grilled onions seasoned with herbs and dressed in a rich pomegranate molasses.",
          vegetarian: true
        },
        {
          name: "Ezme Salad",
          price: "£8.95",
          description: "Minced tomatoes, red onion, green chili, parsley, olive oil, pomegranate juice seasoned with special herbs.",
          vegetarian: true
        },
        {
          name: "Fetta Salad",
          price: "£8.95",
          description: "Diced tomatoes, red onions, parsley cucumbers and feta cheese dressed in olive oil and fresh lemon seasoned with herbs.",
          vegetarian: true
        },
        {
          name: "Shepherds Salad",
          price: "£8.95",
          description: "Shepherd's Salad, known in Turkish as \"Çoban Salatası,\" is a popular salad from Turkey. Diced tomatoes, red onion, parsley, cucumbers, dresses with olive oil and fresh lemon.",
          vegetarian: true
        }
      ]
    },
    {
      title: "Kids Menu",
      items: [
        {
          name: "Chicken Nuggets & Chips",
          price: "from £6.95",
          description: "10PCS Chicken Nuggets, a portion of fries and a side of selected sauce.",
          note: "Available as 6PCS"
        },
        {
          name: "Chicken Shish & Chips",
          price: "from £8.95",
          description: "Four pieces of cubed chicken marinated in special herbs and sauce, served with a portion of chips."
        },
        {
          name: "Chicken Wings & Chips",
          price: "from £8.95",
          description: "Five pieces of marinated chicken wings and a portion of fries."
        }
      ]
    },
    {
      title: "Desserts",
      items: [
        {
          name: "Turkish Delight",
          price: "£7.95",
          description: "A selection of flavoured Turkish delights."
        },
        {
          name: "Sutlac",
          price: "£7.95",
          description: "A Turkish style homemade rice pudding, oven baked for a rich flavour."
        },
        {
          name: "Baklava",
          price: "£8.95",
          description: "Layered with filo pastry, filled with chopped nuts, and sweetened with syrup."
        }
      ]
    },
    {
      title: "Extras",
      items: [
        { name: "Bread", price: "£2.50", description: "" },
        { name: "Rice", price: "£2.95", description: "" },
        { name: "Chips", price: "from £3.00", description: "" },
        { name: "Pot of Ketchup", price: "£1.00", description: "" },
        { name: "Pot of Mayonnaise", price: "£1.00", description: "" },
        { name: "Pot of Garlic Sauce", price: "£1.00", description: "" },
        { name: "Pot of Chilli Sauce", price: "£1.00", description: "" }
      ]
    },
    {
      title: "Drinks",
      items: [
        { name: "Coca-Cola", price: "£2.00", description: "330ml" },
        { name: "Diet Coke", price: "£2.00", description: "330ml" },
        { name: "Fanta", price: "£2.00", description: "330ml" },
        { name: "7 UP", price: "£2.00", description: "330ml" },
        { name: "Dr Pepper", price: "£2.00", description: "330ml" },
        { name: "Still Water", price: "£2.00", description: "330ml" },
        { name: "Sparkling Water", price: "£2.00", description: "330ml" },
        { name: "Apple Juice", price: "£2.00", description: "" },
        { name: "Orange Juice", price: "£2.00", description: "" },
        { name: "Ribena", price: "£2.00", description: "" },
        { name: "Ayran", price: "£2.00", description: "A traditional Turkish drink." }
      ]
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-stone-200 mb-4">
            <span className="text-gray-900 text-sm font-semibold uppercase tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>
              Full Menu
            </span>
          </div>
          <h2 
            className="text-5xl md:text-6xl mb-6 text-gray-900"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Our Complete Menu
          </h2>
          <p 
            className="text-xl text-gray-600 max-w-2xl mx-auto mb-8"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Explore our full selection of authentic Turkish dishes, freshly prepared with premium halal ingredients.
          </p>
        </div>

        {/* Menu Categories */}
        <div className="space-y-16">
          {menuData.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              {/* Category Title */}
              <div className="mb-8">
                <h3 
                  className="text-4xl md:text-5xl text-gray-900 mb-2 pb-4 border-b-2 border-gray-900"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  {category.title}
                </h3>
              </div>

              {/* Menu Items Grid */}
              <div className={`grid gap-6 ${
                category.title === 'Extras' || category.title === 'Drinks' 
                  ? 'md:grid-cols-3 lg:grid-cols-4' 
                  : 'md:grid-cols-2'
              }`}>
                {category.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex}
                    className={`${
                      category.title === 'Extras' || category.title === 'Drinks'
                        ? 'p-4 bg-stone-50 hover:bg-stone-100'
                        : 'pb-6 border-b border-stone-200 hover:bg-stone-50 p-4'
                    } transition-colors duration-200`}
                  >
                    <div className="flex justify-between items-start gap-4 mb-2">
                      <h4 
                        className="text-xl md:text-2xl text-gray-900 flex items-center gap-2"
                        style={{ fontFamily: 'Cormorant Garamond, serif' }}
                      >
                        {item.name}
                        {item.vegetarian && (
                          <Leaf className="w-4 h-4 text-green-700 flex-shrink-0" />
                        )}
                      </h4>
                      <span 
                        className="text-lg md:text-xl font-semibold text-gray-900 whitespace-nowrap"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        {item.price}
                      </span>
                    </div>
                    
                    {item.description && (
                      <p 
                        className="text-sm md:text-base text-gray-600 leading-relaxed"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        {item.description}
                      </p>
                    )}
                    
                    {item.note && (
                      <p 
                        className="text-xs text-gray-500 mt-2 italic"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        {item.note}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Order CTA */}
        <div className="mt-16 text-center">
          <p 
            className="text-lg text-gray-600 mb-6"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            All dishes are prepared fresh to order using authentic recipes and premium halal ingredients.
          </p>
          <a 
            href="https://ordara.co.uk" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-4 bg-gray-900 hover:bg-gray-700 text-white font-semibold text-lg uppercase tracking-wider transition-all duration-300"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Order online with full prices on Ordara
          </a>
        </div>
      </div>
    </section>
  );
}
