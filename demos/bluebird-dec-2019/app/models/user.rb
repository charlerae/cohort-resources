# == Schema Information
#
# Table name: users
#
#  id         :bigint           not null, primary key
#  username   :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  email      :string(100)
#

class User < ApplicationRecord
    validates :username, :email, presence: true, uniqueness: true
    
    has_many :chirps, 
        primary_key: :id, 
        foreign_key: :author_id, 
        class_name: :Chirp


    has_many :likes, 
        primary_key: :id, 
        foreign_key: :liker_id, 
        class_name: :Like
      
    has_many :liked_chirps, 
        through: :likes,
        source: :chirp
end
