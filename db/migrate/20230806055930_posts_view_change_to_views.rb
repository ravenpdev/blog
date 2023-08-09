class PostsViewChangeToViews < ActiveRecord::Migration[7.0]
  change_table :posts do |t|
    t.rename :view, :views
  end
end
