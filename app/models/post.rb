class Post < ApplicationRecord
  validates :title, presence: true, length: { minimum: 5, maximum: 50 }
  validates :body, presence: true, length: { minimum: 10, maximum: 1000 }

  belongs_to :user
  has_many :comments, dependent: :destroy

  has_noticed_notifications model_name: 'Notification'

  def self.ransackable_attributes(_auth_object = nil)
    %w[title body]
  end

  def self.ransackable_associations(_auth_object = nil)
    %w[comments user]
  end

  # after_create :oncreate
  #
  # def oncreate
  #   Post.destroy_all
  # end
end
