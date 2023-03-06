class AddProducts < ActiveRecord::Migration[7.0]
  def change
    Product.create :title => 'Hawaian', :description => 'This is hawaian pizza', :price => 350, :size => 30, :is_veg => false, :is_spisy => false,:best_offer => false, :path_to_image => './images/hawa.jpeg'

    Product.create :title => 'Peperoni', :description => 'This is peperoni pizza', :price => 400,:size => 30, :is_veg => false, :is_spisy => false, :best_offer => false, :path_to_image => './images/peperoni.jpeg' 

    Product.create :title => 'Vegetarian', :description => 'This is vegetarian pizza', :price => 380, :size => 30, :is_veg => true, :is_spisy => false, :best_offer => false, :path_to_image => './images/veg.jpeg' 
  end
end
