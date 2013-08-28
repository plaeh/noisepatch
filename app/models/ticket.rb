class Ticket < ActiveRecord::Base
  attr_accessible :complexity, :description, :due_at, :owner_id, :requestor_id, :ticket_type, :title
end
