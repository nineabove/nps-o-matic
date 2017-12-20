require 'rails_helper'

english_numbers = ['zero', 'one', 'two', 'three', 'four', 'five',
                   'six', 'seven', 'eight', 'nine', 'ten']

def emph_number(class_name)
  count = 0
  within(class_name) do
    count = find('.emph-module-number').text.to_i
  end
  count
end

# transform style attribute has a value that looks like
# "translate(-50%, -50%) rotate(-27deg)"
# regex match for - and any number of digits
def current_angle
  js_code = 'document.getElementsByClassName("nps-result-pointer")[0].style.transform'
  transform_value = page.evaluate_script(js_code).inspect
  transform_value.scan(/(\-\d*)/).last.first.to_i
end

def current_background_color_value
  js_code = 'document.getElementsByClassName("nps-result-pointer")[0].style.backgroundColor'
  page.evaluate_script(js_code).inspect
end

describe 'ratings', js: true do
  it 'has a title' do
    visit '/'
    expect(page).to have_content('NPS-o-Matic')
  end

  it 'has headings', js: true do
    visit '/'
    expect(page).to have_content('Rate!')
    expect(page).to have_content('Appreciate!')
    expect(page).to have_content('NPS Color Legend')
  end

  it 'rating increases Ratings count', js: true do
    random_rate_box_class = english_numbers.sample
    visit '/'
    current_ratings_count = emph_number('.ratings')

    find(".#{random_rate_box_class}").click
    new_ratings_count = emph_number('.ratings')

    expect(new_ratings_count > current_ratings_count).to be true
  end

  it 'rating negatively increases detractors percentage', js: true do
    random_detractor_score = rand(0..6)
    visit '/'
    current_detractor_perc = emph_number('.detractors')

    find(".#{english_numbers[random_detractor_score]}").click
    new_detractor_perc = emph_number('.detractors')

    expect(new_detractor_perc > current_detractor_perc).to be true
  end

  it 'rating negatively decreases the rotation angle of the pointer', js: true do
    random_detractor_score = rand(0..6)
    visit '/'
    current_rotation_angle = current_angle

    find(".#{english_numbers[random_detractor_score]}").click
    new_rotation_angle = current_angle

    expect(current_rotation_angle > new_rotation_angle).to be true
  end

  it 'rating positively increases promoters percentage', js: true do
    random_promoter_score = rand(9..10)
    visit '/'
    current_promoter_perc = emph_number('.promoters')

    find(".#{english_numbers[random_promoter_score]}").click
    new_promoter_perc = emph_number('.promoters')

    expect(new_promoter_perc > current_promoter_perc).to be true
  end

  it 'rating positively increases the rotation angle of the pointer', js: true do
    random_promoter_score = rand(9..10)
    visit '/'
    current_rotation_angle = current_angle

    find(".#{english_numbers[random_promoter_score]}").click
    new_rotation_angle = current_angle

    expect(current_rotation_angle < new_rotation_angle).to be true
  end

  it 'rating changes the color of the pointer', js: true do
    random_rate_box_class = english_numbers.sample
    visit '/'
    current_color = current_background_color_value

    find(".#{random_rate_box_class}").click
    new_color = current_background_color_value

    expect(new_color).not_to eq(current_color)
  end
end
