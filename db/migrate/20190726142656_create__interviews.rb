class CreateInterviews < ActiveRecord::Migration[5.1]
  def change
    create_table :_interviews do |t|
      t.text :candidate_name
      t.datetime :time_slot

      t.timestamps
    end
  end
end
